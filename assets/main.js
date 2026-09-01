/* =====================================================================
   부트캠프 팝업 제어 + 페이지 초기화
   ===================================================================== */

let currentBootcamp = null;

/* 팝업 열기 : openBootcamp('semiconductor' | 'robotech' | 'defense') */
function openBootcamp(key, tabId) {
  const data = (typeof BOOTCAMPS !== "undefined") && BOOTCAMPS[key];
  if (!data) return;

  currentBootcamp = key;
  const modal = document.getElementById("bootcamp-modal");
  const titleEl = document.getElementById("modal-title");
  const subEl = document.getElementById("modal-subtitle");
  const tabsEl = document.getElementById("modal-tabs");
  const bodyEl = document.getElementById("modal-body");

  titleEl.textContent = data.title;
  subEl.textContent = data.subtitle || "";

  /* --- 탭 메뉴 구성 --- */
  tabsEl.innerHTML = "";
  const multiTab = data.tabs.length > 1;
  tabsEl.classList.toggle("hidden", !multiTab);

  bodyEl.innerHTML = "";
  data.tabs.forEach((tab) => {
    if (multiTab) {
      const btn = document.createElement("button");
      btn.id = "modal-tabbtn-" + tab.id;
      btn.className =
        "modal-tabbtn px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition text-slate-600 hover:bg-slate-100";
      btn.innerHTML =
        tab.label +
        (tab.sub
          ? ` <span class="hidden sm:inline font-normal text-xs text-slate-400">(${tab.sub})</span>`
          : "");
      btn.onclick = () => switchBootcampTab(tab.id);
      tabsEl.appendChild(btn);
    }

    const pane = document.createElement("div");
    pane.id = "modal-pane-" + tab.id;
    pane.className = "modal-tab-content";
    pane.innerHTML = tab.html;
    bodyEl.appendChild(pane);
  });

  modal.classList.add("open");
  document.body.classList.add("modal-open");

  switchBootcampTab(tabId || data.tabs[0].id);
}

/* 팝업 내부 탭 전환 */
function switchBootcampTab(tabId) {
  document
    .querySelectorAll("#modal-body .modal-tab-content")
    .forEach((p) => p.classList.remove("active"));
  document.querySelectorAll(".modal-tabbtn").forEach((b) => {
    b.classList.remove("bg-indigo-50", "text-indigo-600");
    b.classList.add("text-slate-600");
  });

  const pane = document.getElementById("modal-pane-" + tabId);
  if (pane) pane.classList.add("active");

  const btn = document.getElementById("modal-tabbtn-" + tabId);
  if (btn) {
    btn.classList.remove("text-slate-600");
    btn.classList.add("bg-indigo-50", "text-indigo-600");
  }

  const bodyEl = document.getElementById("modal-body");
  if (bodyEl) bodyEl.scrollTop = 0;

  /* 코드 하이라이트 & 수식 렌더링 */
  if (window.hljs) {
    document
      .querySelectorAll("#modal-body pre code:not([data-highlighted])")
      .forEach((el) => {
        window.hljs.highlightElement(el);
        el.setAttribute("data-highlighted", "yes");
      });
  }
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise([bodyEl]);
  }
  if (window.lucide) window.lucide.createIcons();
}

/* 팝업 닫기 */
function closeBootcamp() {
  const modal = document.getElementById("bootcamp-modal");
  modal.classList.remove("open");
  document.body.classList.remove("modal-open");
  currentBootcamp = null;
}

/* 로고 클릭 → 맨 위로 */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* 초기화 */
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) lucide.createIcons();

  /* ESC 로 닫기 */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeBootcamp();
  });

  /* 배경 클릭으로 닫기 */
  const backdrop = document.getElementById("modal-backdrop");
  if (backdrop) backdrop.addEventListener("click", closeBootcamp);
});
