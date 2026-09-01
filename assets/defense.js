/* =====================================================================
   방산 실무 교육 팝업 콘텐츠
   - openBootcamp('defense') 로 열립니다.
   - 프로젝트를 추가/수정하려면 tabs 배열의 { id, label, sub, html } 만 고치면 됩니다.
   - 수식은 $ ... $ (인라인) 으로 작성하며, 템플릿 문자열이므로 역슬래시는 \\ 로 씁니다.
   ===================================================================== */

window.BOOTCAMPS = window.BOOTCAMPS || {};

window.BOOTCAMPS.defense = {
  title: "방산 실무 교육",
  subtitle: "무기체계 기획 · 전자전 재머 설계 · RAM-C 신뢰도 분석",
  tabs: [

    /* ===== Project 1 ===== */
    {
      id: "p1",
      label: "Project 1",
      sub: "무기체계 기획",
      html: `
        <header class="bg-gradient-to-r from-slate-900 to-emerald-900 text-white p-6 sm:p-8 rounded-2xl shadow-lg mb-6">
          <div class="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase mb-3">
            Weapon System Planning
          </div>
          <h3 class="text-xl sm:text-2xl font-extrabold mb-2">무기체계 기획 — 비행체 내장형 능동 사이버/전자 방어체계</h3>
          <p class="text-slate-300 text-sm leading-relaxed">
            항공전자 공급망을 노린 잠복형 사이버/물리 교란(LotL) 위협에 대응하는 비행체 내장형 능동 방어체계를 기획하고,
            운용개념과 핵심 요구도를 정의한 프로젝트입니다.
          </p>
        </header>

        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 mb-6">
          <h4 class="text-lg font-bold text-emerald-900 border-l-4 border-emerald-600 pl-3">위협 정의</h4>
          <div class="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg text-sm font-medium text-slate-800">
            항공기 제조·정비 단계 또는 지상 임무계획 데이터 로딩 중, 정상 버스 프로토콜 규격으로 위장하여 침투하는
            <strong>‘항공전자 공급망 잠복형 사이버/물리 교란(LotL 공격)’</strong>.
          </div>
        </section>

        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 mb-6">
          <h4 class="text-lg font-bold text-emerald-900 border-l-4 border-emerald-600 pl-3">무기체계 분류 및 운용개념</h4>
          <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm">
            <h5 class="font-bold text-slate-900 mb-1">분류</h5>
            <p class="text-slate-600">유·무인 복합체계 및 차세대 지휘통제기 적용 — 비행체 내장형 능동 사이버/전자 방어체계.</p>
          </div>
          <div>
            <h5 class="font-bold text-slate-900 text-sm mb-2">운용 흐름</h5>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <span class="bg-emerald-800 text-white font-bold px-2 py-0.5 rounded text-[11px]">검증</span>
                <p class="text-slate-600 pt-1">지상 데이터 해시/무결성 스크리닝 (장비 검증)</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <span class="bg-emerald-800 text-white font-bold px-2 py-0.5 rounded text-[11px]">탐지</span>
                <p class="text-slate-600 pt-1">비행 중 내장형 AI 보안 프로세서의 실시간 밀리초 단위 트래픽 감시</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <span class="bg-emerald-800 text-white font-bold px-2 py-0.5 rounded text-[11px]">추적/격리</span>
                <p class="text-slate-600 pt-1">비정상 버스 채널 순간 격리 및 백업 버스 자동 전환</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <span class="bg-emerald-800 text-white font-bold px-2 py-0.5 rounded text-[11px]">대응/복구</span>
                <p class="text-slate-600 pt-1">안전 기본 데이터 공급 및 암호화 격리 저장</p>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h4 class="text-lg font-bold text-emerald-900 border-l-4 border-emerald-600 pl-3">주요 핵심 요구도 (5)</h4>
          <div class="space-y-3">
            <div class="flex gap-3">
              <span class="shrink-0 w-7 h-7 rounded-full bg-emerald-700 text-white text-xs font-bold flex items-center justify-center">1</span>
              <div>
                <h5 class="font-bold text-slate-900 text-sm">실시간 버스 모니터링 &amp; 저지연성</h5>
                <p class="text-slate-600 text-xs sm:text-sm mt-1">패킷 검사 지연 $\\le 0.05\\text{ ms}$, 제어 주기 영향 지터 최소화.</p>
              </div>
            </div>
            <div class="flex gap-3">
              <span class="shrink-0 w-7 h-7 rounded-full bg-emerald-700 text-white text-xs font-bold flex items-center justify-center">2</span>
              <div>
                <h5 class="font-bold text-slate-900 text-sm">이상 탐지율 &amp; 오경보율</h5>
                <p class="text-slate-600 text-xs sm:text-sm mt-1">LotL 비인가 명령 탐지율 $\\ge 99.9\\%$, 오경보율 $\\le 10^{-6}$.</p>
              </div>
            </div>
            <div class="flex gap-3">
              <span class="shrink-0 w-7 h-7 rounded-full bg-emerald-700 text-white text-xs font-bold flex items-center justify-center">3</span>
              <div>
                <h5 class="font-bold text-slate-900 text-sm">결함 격리 &amp; 무중단 복구</h5>
                <p class="text-slate-600 text-xs sm:text-sm mt-1">오염 LRU 발생 시 1 ms 이내 분리 및 백업 채널 즉시 전환.</p>
              </div>
            </div>
            <div class="flex gap-3">
              <span class="shrink-0 w-7 h-7 rounded-full bg-emerald-700 text-white text-xs font-bold flex items-center justify-center">4</span>
              <div>
                <h5 class="font-bold text-slate-900 text-sm">공급망 무결성 검증</h5>
                <p class="text-slate-600 text-xs sm:text-sm mt-1">HW 기반 보안 부팅(Root of Trust) 및 데이터 무결성 검증.</p>
              </div>
            </div>
            <div class="flex gap-3">
              <span class="shrink-0 w-7 h-7 rounded-full bg-emerald-700 text-white text-xs font-bold flex items-center justify-center">5</span>
              <div>
                <h5 class="font-bold text-slate-900 text-sm">SWaP 제약</h5>
                <p class="text-slate-600 text-xs sm:text-sm mt-1">추가 중량 3.5 kg 이하, 소비 전력 60 W 이하.</p>
              </div>
            </div>
          </div>
        </section>
      `
    },

    /* ===== Project 2 ===== */
    {
      id: "p2",
      label: "Project 2",
      sub: "전자전 재머 설계",
      html: `
        <header class="bg-gradient-to-r from-emerald-900 to-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-lg mb-6">
          <div class="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase mb-3">
            Electronic Warfare — Jammer Design
          </div>
          <h3 class="text-xl sm:text-2xl font-extrabold mb-2">전자전 재머 사양 설계 — 지상 AESA 레이다 대응 효과도 분석</h3>
          <p class="text-slate-300 text-sm leading-relaxed">
            자동화 신호처리를 수행하는 AESA 레이다에 대응하기 위한 DRFM 재머의 방식·주파수 대역을 선정하고,
            수신전력·$J/S$·Burn-through Range를 정량 분석한 프로젝트입니다.
          </p>
        </header>

        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 mb-6">
          <h4 class="text-lg font-bold text-emerald-900 border-l-4 border-emerald-600 pl-3">재밍 방식 및 주파수 대역 선정</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="font-bold text-slate-900 mb-1">방식 — DRFM</h5>
              <p class="text-slate-600">
                자동화 신호처리를 수행하는 AESA 레이더에 대응하기 위해 수신 신호를 디지털로 복제·변조하는
                <strong>DRFM (Digital Radio Frequency Memory)</strong> 채택.
              </p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="font-bold text-slate-900 mb-1">주파수 대역 — S-band</h5>
              <p class="text-slate-600">
                적 레이다 동작 주파수($\\lambda = 0.1\\text{ m}$)에 맞춘 <strong>S-band (중심 주파수 3 GHz)</strong> 선정.
              </p>
            </div>
          </div>
        </section>

        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h4 class="text-lg font-bold text-emerald-900 border-l-4 border-emerald-600 pl-3">재머 성능 및 효과도 분석</h4>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-1">
              <span class="text-xs text-slate-400 font-bold block">신호 수신전력 (100 km)</span>
              <strong class="text-slate-800">$P_r \\approx 1.59 \\times 10^{-17}\\text{ W}$</strong>
            </div>
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-1">
              <span class="text-xs text-slate-400 font-bold block">Jamming-to-Signal Ratio</span>
              <strong class="text-slate-800">$J/S \\approx 7.95 \\times 10^7$</strong>
            </div>
            <div class="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-1">
              <span class="text-xs text-emerald-600 font-bold block">단방향 전파 경로 기준</span>
              <strong class="text-emerald-700">아군 재밍 우세</strong>
            </div>
          </div>

          <div class="prose-table">
            <h5 class="font-bold text-slate-900 text-sm mb-1">Burn-through Range 평가</h5>
            <table>
              <thead>
                <tr><th>기준</th><th>Burn-through Range</th></tr>
              </thead>
              <tbody>
                <tr><td>$J/S = 1$</td><td>약 $11.2\\text{ m}$</td></tr>
                <tr><td>요구 $J/S \\ge 6\\text{ dB}$</td><td>약 $22.4\\text{ m}$</td></tr>
              </tbody>
            </table>
            <p class="text-xs text-slate-500 mt-1">
              → 레이다 최근접 거리까지 아군 재밍 신호의 우세성 검증.
            </p>
          </div>
        </section>
      `
    },

    /* ===== Project 3 ===== */
    {
      id: "p3",
      label: "Project 3",
      sub: "RAM-C 신뢰도 분석",
      html: `
        <header class="bg-gradient-to-r from-slate-900 to-teal-900 text-white p-6 sm:p-8 rounded-2xl shadow-lg mb-6">
          <div class="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase mb-3">
            RAM-C Reliability &amp; Availability
          </div>
          <h3 class="text-xl sm:text-2xl font-extrabold mb-2">RAM-C 기반 신뢰도/가용도 산출 및 정비 효율화 개선안</h3>
          <p class="text-slate-300 text-sm leading-relaxed">
            KF-21 시제기 정비일지를 전처리하여 MTBF·MTTR·고유가용도($A_o$)를 산출하고,
            민감도 분석과 정비체계 개선안을 도출한 프로젝트입니다.
          </p>
        </header>

        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 mb-6">
          <h4 class="text-lg font-bold text-teal-900 border-l-4 border-teal-600 pl-3">정비 데이터 전처리 및 신뢰도 지표 산출</h4>
          <p class="text-sm text-slate-600">
            KF-21 시제기 3대(001~003호기) 정비일지 데이터를 바탕으로 기체별 MTBF, MTTR, 고유가용도($A_o$) 산출 및
            작전요구치($ROC \\ge 0.93$) 충족 여부 평가.
          </p>
          <div class="bg-slate-50 border-l-4 border-teal-500 p-4 rounded-r-lg text-sm text-slate-700">
            <strong>민감도 분석:</strong> MTTR 1시간 단축 시 가용도($A_o$) 변화율 분석.
          </div>
        </section>

        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 mb-6">
          <h4 class="text-lg font-bold text-teal-900 border-l-4 border-teal-600 pl-3">신뢰도 개선안</h4>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <span class="font-bold text-teal-700 text-xs uppercase tracking-wider block">HW / 설계</span>
              <p class="text-slate-600 text-xs leading-relaxed">
                Quick-Turn Fastener 및 블라인드 메이트 커넥터 적용 → O-Level LRU 1:1 신속 맞교체.
              </p>
            </div>
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <span class="font-bold text-teal-700 text-xs uppercase tracking-wider block">스마트 예지정비</span>
              <p class="text-slate-600 text-xs leading-relaxed">
                BIT 고도화, CBM+/PHM 알고리즘, AR 기반 3D 전자식 기술교범(IETM) 도입.
              </p>
            </div>
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <span class="font-bold text-teal-700 text-xs uppercase tracking-wider block">정비 / 군수지원</span>
              <p class="text-slate-600 text-xs leading-relaxed">
                3단계 정비 체계(O-I-D Level) 최적화 및 PBL 연계 안전재고 확보.
              </p>
            </div>
          </div>
        </section>

        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h4 class="text-lg font-bold text-teal-900 border-l-4 border-teal-600 pl-3">피드백을 통해 알게 된 점 &amp; 핵심 보완사항</h4>
          <div class="space-y-3">
            <div class="flex gap-3">
              <span class="shrink-0 w-7 h-7 rounded-full bg-teal-700 text-white text-xs font-bold flex items-center justify-center">1</span>
              <div>
                <h5 class="font-bold text-slate-900 text-sm">엄격한 이상치 처리 원칙 (임의 복원 지양)</h5>
                <p class="text-slate-600 text-xs sm:text-sm mt-1">
                  음수 수리시간은 임의 추정(+2시간)으로 복원하지 않고, 명백한 입력 오류 데이터로 간주하여
                  반드시 제거(Drop)해야 지표 왜곡을 막을 수 있음.
                </p>
              </div>
            </div>
            <div class="flex gap-3">
              <span class="shrink-0 w-7 h-7 rounded-full bg-teal-700 text-white text-xs font-bold flex items-center justify-center">2</span>
              <div>
                <h5 class="font-bold text-slate-900 text-sm">표준 산출 공식 및 Fleet 대표값 기준 준수</h5>
                <ul class="list-disc list-inside text-slate-600 text-xs sm:text-sm mt-1 space-y-0.5">
                  <li>MTBF 산출: 운용시간에서 정비시간을 차감하지 않고 $\\text{총 운용시간} / \\text{고장건수}$로 계산.</li>
                  <li>Fleet 대표값: 기체별 평균을 다시 평균 내지 않고 전체 데이터를 통합(Aggregate)하여 산출.</li>
                </ul>
              </div>
            </div>
            <div class="flex gap-3">
              <span class="shrink-0 w-7 h-7 rounded-full bg-teal-700 text-white text-xs font-bold flex items-center justify-center">3</span>
              <div>
                <h5 class="font-bold text-slate-900 text-sm">민감도 분석의 변수 통제 및 결과 해석</h5>
                <ul class="list-disc list-inside text-slate-600 text-xs sm:text-sm mt-1 space-y-0.5">
                  <li>변수 통제: MTTR 단축 효과 분석 시 MTBF(200시간)는 상수로 고정하고 MTTR만 단축.</li>
                  <li>결과 해석: MTBF가 MTTR보다 훨씬 커서 1시간 단축에 따른 $A_o$ 증가폭은 약 $+0.47\\%p$로 제한적.
                      이미 요구도($0.93$)를 충족하므로 필수 조치가 아닌 추가 운용 여유도 확보 차원의 개선으로 해석하는 것이 타당.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      `
    }
  ]
};
