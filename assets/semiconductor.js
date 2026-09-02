/* =====================================================================
   반도체 실무 부트캠프 팝업 콘텐츠
   - openBootcamp('semiconductor') 로 열립니다.
   - 프로젝트를 추가/수정하려면 tabs 배열의 { id, label, sub, html } 만 고치면 됩니다.
   ===================================================================== */

window.BOOTCAMPS = window.BOOTCAMPS || {};

window.BOOTCAMPS.semiconductor = {
  title: "반도체 실무 부트캠프",
  subtitle: "8D Report 실무 · CMP SPC 분석 · Chipping SQC 모델링",
  tabs: [

    /* ===== Project 1 ===== */
    {
      id: "p1",
      label: "Project 1",
      sub: "8D Report",
      html: `
        <header class="bg-gradient-to-r from-blue-900 to-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-lg mb-6">
          <div class="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase mb-3">
            Quality Management &amp; Problem Solving
          </div>
          <h3 class="text-xl sm:text-2xl font-extrabold mb-2">제조 품질 관리 체계 분석 &amp; 8D Report 기반 문제 해결</h3>
          <p class="text-slate-300 text-sm leading-relaxed">
            글로벌 제조업의 대형 결함 사례(토요타 급발진)를 바탕으로 Value Chain별 품질 보증 프로세스와
            OCAP·8D 체계를 비교하고, Root Cause 규명 및 8D Report 양식 실습을 진행한 프로젝트입니다.
          </p>
        </header>

        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 mb-6">
          <h4 class="text-lg font-bold text-blue-900 border-l-4 border-blue-600 pl-3">프로젝트 개요</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="font-bold text-slate-900 mb-2">🎯 수행 목표</h5>
              <ul class="list-disc list-inside space-y-1 text-slate-600">
                <li>제조 밸류체인(IQC → PQC → OQC → CS) 품질 보증 업무 정립</li>
                <li>응급 조치(OCAP)와 근본 원인 분석(8D)의 차이·연계성 규명</li>
                <li>실제 결함 사례 기반 Root Cause 도출 및 8D Form 작성</li>
              </ul>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="font-bold text-slate-900 mb-2">🛠️ 활용 도구</h5>
              <div class="flex flex-wrap gap-1.5 pt-1">
                <span class="px-2.5 py-1 bg-slate-200 text-slate-700 text-xs font-semibold rounded">8D Report (D1~D8)</span>
                <span class="px-2.5 py-1 bg-slate-200 text-slate-700 text-xs font-semibold rounded">OCAP</span>
                <span class="px-2.5 py-1 bg-slate-200 text-slate-700 text-xs font-semibold rounded">5-Why / Fishbone</span>
                <span class="px-2.5 py-1 bg-slate-200 text-slate-700 text-xs font-semibold rounded">ISO 9001</span>
                <span class="px-2.5 py-1 bg-slate-200 text-slate-700 text-xs font-semibold rounded">6 Sigma (DMAIC)</span>
                <span class="px-2.5 py-1 bg-slate-200 text-slate-700 text-xs font-semibold rounded">FMEA</span>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h4 class="text-lg font-bold text-blue-900 border-l-4 border-blue-600 pl-3">실사례 적용: 토요타 급발진 사태 8D Report</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <span class="bg-blue-900 text-white font-bold px-2 py-0.5 rounded text-[11px]">D1</span>
              <h5 class="font-bold text-slate-900 pt-1 text-sm">Team</h5>
              <p class="text-slate-600">QA 총괄 주도로 설계·전자제어(ECU)·협력사·북미 CS 대응팀 CFT 구성</p>
            </div>
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <span class="bg-blue-900 text-white font-bold px-2 py-0.5 rounded text-[11px]">D2</span>
              <h5 class="font-bold text-slate-900 pt-1 text-sm">Problem</h5>
              <p class="text-slate-600">5W2H 정의: 북미 주행 차량에서 페달 복귀 불량으로 통제 불능 가속 발생</p>
            </div>
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <span class="bg-blue-900 text-white font-bold px-2 py-0.5 rounded text-[11px]">D3</span>
              <h5 class="font-bold text-slate-900 pt-1 text-sm">Containment</h5>
              <p class="text-slate-600">사제 매트 탈거 공지, 신규 출하 홀딩, 페달 임시 보수</p>
            </div>
            <div class="p-4 bg-red-50 rounded-xl border border-red-200 space-y-1">
              <span class="bg-red-600 text-white font-bold px-2 py-0.5 rounded text-[11px]">D4</span>
              <h5 class="font-bold text-red-900 pt-1 text-sm">Root Cause</h5>
              <p class="text-red-700 font-medium">5-Why: ①페달 기계적 마찰 ②매트 간섭 ③브레이크 우선 제어(BOS) 누락</p>
            </div>
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <span class="bg-blue-900 text-white font-bold px-2 py-0.5 rounded text-[11px]">D5</span>
              <h5 class="font-bold text-slate-900 pt-1 text-sm">PCA</h5>
              <p class="text-slate-600">페달 부품 재설계(Steel Insert), 전 차종 ECU에 BOS 탑재 확정</p>
            </div>
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <span class="bg-blue-900 text-white font-bold px-2 py-0.5 rounded text-[11px]">D6</span>
              <h5 class="font-bold text-slate-900 pt-1 text-sm">Validate</h5>
              <p class="text-slate-600">1,000만 대 리콜 S/W 업데이트, 100만 회 내구 시험 통과</p>
            </div>
            <div class="p-4 bg-red-50 rounded-xl border border-red-200 space-y-1">
              <span class="bg-red-600 text-white font-bold px-2 py-0.5 rounded text-[11px]">D7</span>
              <h5 class="font-bold text-red-900 pt-1 text-sm">Prevention</h5>
              <p class="text-red-700 font-medium">Design FMEA 개정, 글로벌 품질개선위원회 신설, 검증 주기 확장</p>
            </div>
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <span class="bg-blue-900 text-white font-bold px-2 py-0.5 rounded text-[11px]">D8</span>
              <h5 class="font-bold text-slate-900 pt-1 text-sm">Congratulate</h5>
              <p class="text-slate-600">CFT·협력사 기여 인정, Lessons Learned 전사 공유 후 종결</p>
            </div>
          </div>
        </section>
      `
    },

    /* ===== Project 2 ===== */
    {
      id: "p2",
      label: "Project 2",
      sub: "CMP SPC",
      html: `
        <header class="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-6 sm:p-8 rounded-2xl shadow-lg mb-6">
          <div class="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase mb-3">
            Quality Control &amp; Data Science
          </div>
          <h3 class="text-xl sm:text-2xl font-extrabold mb-2">반도체 CMP 공정 OOS 원인 분석 &amp; SPC 관리 체계 고도화</h3>
          <p class="text-slate-300 text-sm leading-relaxed">
            양산·계측 데이터 분석으로 Dressing 조건 변경에 따른 연마율 저하(Pad Glazing) 메커니즘을 통계적으로 입증하고,
            실시간 I-MR 관리도와 Nelson Rule 기반 OOC 탐지 체계를 수립했습니다.
          </p>
        </header>

        <section class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div class="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
            <span class="text-xs text-slate-400 font-bold block">Target 치수</span>
            <strong class="text-base sm:text-lg font-extrabold text-slate-800">5000 Å</strong>
          </div>
          <div class="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
            <span class="text-xs text-slate-400 font-bold block">고객 규격</span>
            <strong class="text-base sm:text-lg font-extrabold text-slate-800">LSL 4600 / USL 5400</strong>
          </div>
          <div class="bg-red-50 p-4 rounded-xl border border-red-200 text-center shadow-sm">
            <span class="text-xs text-red-500 font-bold block">L-31 최대 치수</span>
            <strong class="text-base sm:text-lg font-extrabold text-red-600">5477 Å (OOS)</strong>
          </div>
          <div class="bg-amber-50 p-4 rounded-xl border border-amber-200 text-center shadow-sm">
            <span class="text-xs text-amber-600 font-bold block">L-31 공정능력</span>
            <strong class="text-base sm:text-lg font-extrabold text-amber-700">Cpk 0.62</strong>
          </div>
        </section>

        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 mb-6">
          <h4 class="text-lg font-bold text-slate-900 border-l-4 border-indigo-600 pl-3">통계적 공정 모델링 &amp; 공정능력 분석</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div class="space-y-3">
              <h5 class="font-bold text-slate-900">베이스라인(L-01~L-20) 관리선 산출</h5>
              <ul class="space-y-2 text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <li>• <strong>중심선 (CL):</strong> $$\\text{CL} = \\bar{X} = 5041.4\\text{ Å}$$</li>
                <li>• <strong>공정 산포 추정:</strong> $$\\hat{\\sigma} = \\frac{\\overline{MR}}{d_2} = \\frac{24.4}{1.128} \\approx 21.63\\text{ Å}$$</li>
                <li>• <strong>3σ 관리한계선:</strong> $$\\text{UCL} = 5106.3, \\quad \\text{LCL} = 4976.5$$</li>
              </ul>
            </div>
            <div class="space-y-3 prose-table">
              <h5 class="font-bold text-slate-900">공정능력지수 ($C_p, C_{pk}$) 해석</h5>
              <table>
                <thead>
                  <tr><th>지표</th><th>산출값</th><th>해석</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>$C_p$</strong></td><td><strong>1.62</strong></td><td>공정 산포는 규격 대비 충분히 우수</td></tr>
                  <tr><td><strong>$C_{pk}$</strong></td><td><strong class="text-red-600">0.62</strong></td><td>평균이 USL로 248Å Shift → 부적합 발생</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <div class="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl text-sm text-red-900 space-y-1">
          <strong>💡 핵심 인사이트 (OOC vs OOS 시점 불일치):</strong>
          <p>관리선 이탈(OOC)은 <strong>L-27</strong>에서 최초 발생했으나 규격 초과(OOS)는 <strong>L-31</strong>에서 발생 —
          <strong>4~5개 Lot의 시간 지연</strong>이 존재했으며, 실시간 OOC 감지 체계 부재로 불량 유출을 사전 차단하지 못했음을 규명</p>
        </div>
      `
    },

    /* ===== Project 3 ===== */
    {
      id: "p3",
      label: "Project 3",
      sub: "Chipping SQC",
      html: `
        <header class="bg-gradient-to-r from-blue-950 to-indigo-900 text-white p-6 sm:p-8 rounded-2xl shadow-lg mb-6">
          <div class="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase mb-3">
            Semiconductor QA &amp; SQC Data Analysis
          </div>
          <h3 class="text-xl sm:text-2xl font-extrabold mb-2">BGA DRAM Package Corner Chipping 불량 분석 &amp; SQC 모델링</h3>
          <p class="text-slate-300 text-sm leading-relaxed">
            Sawing 공정의 잠재 결함(Micro-crack)과 물류 충격(Shock) 간 복합 상호작용을 규명하기 위한
            가상 데이터 엔지니어링 및 통계적 공정 관리(p-Chart, Pareto) 프로젝트입니다.
          </p>
        </header>

        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h4 class="text-lg font-bold text-slate-900 border-l-4 border-indigo-600 pl-3">3대 핵심 통계 분석 결론</h4>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <span class="font-bold text-indigo-600 text-xs uppercase tracking-wider block">Insight 1</span>
              <h5 class="font-bold text-slate-900">특수 원인 식별</h5>
              <p class="text-slate-600 text-xs leading-relaxed">p-Chart CL=0.73%, UCL=1.53%. LOT-04(4.3%), LOT-11(5.5%), LOT-18(4.3%) 3개 로트가 관리한계 이탈</p>
            </div>
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <span class="font-bold text-indigo-600 text-xs uppercase tracking-wider block">Insight 2</span>
              <h5 class="font-bold text-slate-900">모서리 응력 집중 (Pareto 87.4%)</h5>
              <p class="text-slate-600 text-xs leading-relaxed">전체 불량의 87.4%(159개)가 90° Corner에 집중 — 충격 에너지가 모서리 미세 크랙에 집중됨을 규명</p>
            </div>
            <div class="p-4 bg-red-50 rounded-xl border border-red-200 space-y-2">
              <span class="font-bold text-red-600 text-xs uppercase tracking-wider block">Insight 3</span>
              <h5 class="font-bold text-red-900">결합 상호작용 (Interaction)</h5>
              <p class="text-red-700 text-xs leading-relaxed">Blade 마모 단독(0.25%)·충격 단독(0.50%)은 정상이나 <strong>동시 발생 시 불량률 4.70%로 폭증</strong></p>
            </div>
          </div>
        </section>
      `
    }
  ]
};
