/* =====================================================================
   Project 팝업 : 투어나잇 (TourNight)
   - openBootcamp('tournight') 로 열립니다.
   - 2026 관광데이터 활용 공모전 (팀 무한대전) — 대전 특화 외국인 야간관광 다국어 웹
   ===================================================================== */

window.BOOTCAMPS = window.BOOTCAMPS || {};

window.BOOTCAMPS.tournight = {
  title: "투어나잇 (TourNight)",
  subtitle: "대전 특화 외국인 야간관광 통합 안내 웹 — 2026 관광데이터 활용 공모전 (팀 무한대전)",
  tabs: [
    {
      id: "overview",
      label: "TourNight",
      sub: "Team Project",
      html: `
        <header class="bg-gradient-to-r from-emerald-900 to-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-lg mb-6">
          <div class="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase mb-3">
            Tourism Data · Multilingual Web Service
          </div>
          <h3 class="text-xl sm:text-2xl font-extrabold mb-2">투어나잇 (TourNight) — 대전의 '과학 + 자연 + 밤' 야간관광 통합 안내</h3>
          <p class="text-slate-300 text-sm leading-relaxed">
            <strong>구분:</strong> 2026 관광데이터 활용 공모전 웹·앱 개발 부문 (팀 무한대전, 팀 프로젝트)<br>
            <strong>담당 역할:</strong> UI/UX 디자인 전반, 스탬프투어·타슈(공공자전거) 연동, 다국어(영문) 페이지, 외부 API 연동 수정
          </p>
          <div class="flex flex-wrap gap-1.5 mt-4 text-[11px] font-semibold">
            <span class="bg-white/15 px-2.5 py-1 rounded-full">Next.js (App Router)</span>
            <span class="bg-white/15 px-2.5 py-1 rounded-full">React · TypeScript</span>
            <span class="bg-white/15 px-2.5 py-1 rounded-full">Tailwind CSS</span>
            <span class="bg-white/15 px-2.5 py-1 rounded-full">Supabase (PostgreSQL + PostGIS)</span>
            <span class="bg-white/15 px-2.5 py-1 rounded-full">KTO TourAPI</span>
            <span class="bg-white/15 px-2.5 py-1 rounded-full">카카오맵</span>
            <span class="bg-white/15 px-2.5 py-1 rounded-full">Gemini</span>
            <span class="bg-white/15 px-2.5 py-1 rounded-full">타슈 API</span>
            <span class="bg-white/15 px-2.5 py-1 rounded-full">Vercel</span>
          </div>
        </header>

        <!-- 1. 서비스 개요 -->
        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 mb-6">
          <h4 class="text-lg font-bold text-emerald-900 border-l-4 border-emerald-600 pl-3">1. 서비스 개요</h4>
          <p class="text-sm text-slate-600">
            대전의 과학·자연·야간 관광 콘텐츠를 외국인 관광객에게 다국어로 안내하는 웹 서비스.
            한국관광공사(KTO) OpenAPI를 실시간 호출해 야간 명소 데이터를 수집·분류하고, 지도·다국어·혼잡도 예측까지 통합 제공.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
              <span class="text-xs text-slate-400 font-bold block">배포</span>
              <strong class="text-slate-800 text-xs">tournight.vercel.app</strong>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
              <span class="text-xs text-slate-400 font-bold block">검증 야간 스팟</span>
              <strong class="text-slate-800">46곳</strong>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
              <span class="text-xs text-slate-400 font-bold block">KTO 실데이터 수집</span>
              <strong class="text-slate-800">142건</strong>
            </div>
          </div>
        </section>

        <!-- 2. 핵심 기능 -->
        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 mb-6">
          <h4 class="text-lg font-bold text-emerald-900 border-l-4 border-emerald-600 pl-3">2. 핵심 기능</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="font-bold text-slate-900 mb-1">야간 명소 탐색 · 상세</h5>
              <p class="text-slate-600">검증 스팟 46곳, 카테고리 필터 + 검색, 리스트↔지도 연동(커스텀 핀). 공식 사진, AI 야간 가이드(KTO 개요 → Gemini 현지화, DB 캐시), 인근 자연 야경 추천, 카카오맵 길찾기 딥링크</p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="font-bold text-slate-900 mb-1">서바이벌 한국어 · 안전</h5>
              <p class="text-slate-600">밤 상황 필수 표현 8개(발음+뜻) 언어별 캐시, 긴급연락처(112·119·1330) 전 페이지 푸터 고정 노출</p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="font-bold text-slate-900 mb-1">다국어 지원</h5>
              <p class="text-slate-600">ko/en/ja/zh 자동 감지, 미지원 언어는 영어 폴백. 명소명·소개문은 KTO 다국어 관광정보 공식 번역(좌표 매칭) 우선, 없으면 Gemini 폴백</p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="font-bold text-slate-900 mb-1">혼잡도 예측</h5>
              <p class="text-slate-600">KT 이동통신 데이터 기반 집중률 예측 API로 향후 7일 여유/보통/붐빔 및 최적 방문일 안내 (26곳 매칭)</p>
            </div>
          </div>
        </section>

        <!-- 3. 담당 역할 -->
        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 mb-6">
          <h4 class="text-lg font-bold text-emerald-900 border-l-4 border-emerald-600 pl-3">3. 담당 역할</h4>
          <ul class="space-y-2 text-sm text-slate-600">
            <li class="flex gap-2"><span class="text-emerald-500 font-bold">•</span> <span>홈 화면 및 전반적인 UI/UX 디자인, 모바일 메뉴·온보딩·페르소나 이미지 반영</span></li>
            <li class="flex gap-2"><span class="text-emerald-500 font-bold">•</span> <span>스탬프투어 기능 추가 및 타슈(대전 공공자전거) API 연동</span></li>
            <li class="flex gap-2"><span class="text-emerald-500 font-bold">•</span> <span>영문(English) 버전 페이지 정비, 외부 API 연동 오류 수정</span></li>
          </ul>
        </section>

        <!-- 4. 공모전 준수사항 -->
        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <h4 class="text-lg font-bold text-emerald-900 border-l-4 border-emerald-600 pl-3">4. 공모전 준수사항</h4>
          <ul class="space-y-2 text-sm text-slate-600">
            <li class="flex gap-2"><span class="text-emerald-500 font-bold">•</span> <span>KTO OpenAPI는 파일 데이터가 아닌 <strong>실시간 호출</strong>로만 활용 (심사 시 호출 내역 확인)</span></li>
            <li class="flex gap-2"><span class="text-emerald-500 font-bold">•</span> <span>API 호출 시 서비스 고유명 <code>MobileApp=TourNight</code> 파라미터 지정</span></li>
            <li class="flex gap-2"><span class="text-emerald-500 font-bold">•</span> <span>서비스 화면·코드에 "한국관광공사/KTO" 명칭·로고 사용 금지, 원천 관광 데이터 수정 금지</span></li>
          </ul>
        </section>
      `
    }
  ]
};
