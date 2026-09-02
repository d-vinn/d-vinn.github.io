/* =====================================================================
   Research 팝업 : 중이온가속기 이상 탐지 (기초과학연구원 IBS, 학부연구생)
   - openBootcamp('ibs') 로 열립니다.
   - 수식은 $ ... $ (인라인). 템플릿 문자열이므로 역슬래시는 \\ 로 씁니다.
   ===================================================================== */

window.BOOTCAMPS = window.BOOTCAMPS || {};

window.BOOTCAMPS.ibs = {
  title: "중이온가속기 이상 탐지",
  subtitle: "대규모 센서 시계열 기반 빔 정지(Beam Failure) 선제 예측 파이프라인 — 기초과학연구원(IBS), 충남대학교 컴퓨터공학과  학부연구생",
  tabs: [
    {
      id: "beam-failure",
      label: "Beam Failure Prediction",
      sub: "Anomaly Transformer",
      html: `
        <header class="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-6 sm:p-8 rounded-2xl shadow-lg mb-6">
          <div class="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase mb-3">
            Time-Series Anomaly Prediction · Accelerator Operations
          </div>
          <h3 class="text-xl sm:text-2xl font-extrabold mb-2">중이온가속기 센서 시계열 데이터 기반 빔 정지 선제 예측 및 이상 탐지 파이프라인 구축</h3>
          <p class="text-slate-300 text-sm leading-relaxed">
            <strong>소속 / 과제:</strong> 기초과학연구원(IBS) 중이온가속기연구소 위탁 연구 과제<br>
            <strong>참여 기간:</strong> 2025.08 ~ 2025.12<br>
            <strong>담당 역할:</strong> EDA(신호 노이즈/상관성 분석), Anomaly Transformer 기반 미래 비정상 Phase Error 선제 탐지(Anomaly Prediction) 모델링
          </p>
          <div class="flex flex-wrap gap-1.5 mt-4 text-[11px] font-semibold">
            <span class="bg-white/15 px-2.5 py-1 rounded-full">Python</span>
            <span class="bg-white/15 px-2.5 py-1 rounded-full">PyTorch</span>
            <span class="bg-white/15 px-2.5 py-1 rounded-full">Anomaly Transformer</span>
            <span class="bg-white/15 px-2.5 py-1 rounded-full">Time-Series Resampling</span>
            <span class="bg-white/15 px-2.5 py-1 rounded-full">Cross-Correlation</span>
            <span class="bg-white/15 px-2.5 py-1 rounded-full">SciPy</span>
            <span class="bg-white/15 px-2.5 py-1 rounded-full">Scikit-learn</span>
          </div>
        </header>

        <!-- 1 -->
        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 mb-6">
          <h4 class="text-lg font-bold text-blue-900 border-l-4 border-blue-600 pl-3">1. 프로젝트 배경 및 문제 정의</h4>

          <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm">
            <h5 class="font-bold text-slate-900 mb-1">배경</h5>
            <p class="text-slate-600">중이온가속기 가동률을 극대화하려면 RF Cavity·전자석 등 복합 하드웨어 상호작용에서 비롯되는 빔 정지(Beam Failure)를 사전에 방지해야 함</p>
          </div>

          <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm">
            <h5 class="font-bold text-slate-900 mb-1">사후 탐지(Detection) → 사전 예측(Prediction) 전환</h5>
            <ul class="list-disc list-inside text-slate-600 space-y-0.5">
              <li>기존 이상 탐지는 수집된 데이터 내 과거/현재 이상치 유무를 판별하는 방식(Reconstruction 기반 등)에 머묾</li>
              <li>가속기 보호를 위해, 현재 시점($t$) 기준 과거 $p$초간의 센서 패턴을 분석하여
                  미래 $k$초 후(예: 30초 후) Cavity의 $\\vert\\text{Phase Error}\\vert \\ge 10^\\circ$ 도달 여부를 선제 예측하는
                  <strong>선행적 이상 예측(Anomaly Prediction)</strong> 문제</li>
            </ul>
          </div>

          <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm">
            <h5 class="font-bold text-slate-900 mb-1">접근 방식</h5>
            <ul class="list-disc list-inside text-slate-600 space-y-0.5">
              <li>이상치 값 자체를 맞히는 회귀(Regression)는 이상치 편차의 극단성으로 최적화가 어려움</li>
              <li>미래 위험 구간 진입 여부를 판별하는 <strong>이진 분류</strong> 예측 태스크로 Formulation → 탐지 안정성·실효성 확보</li>
            </ul>
          </div>
        </section>

        <!-- 2 -->
        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 mb-6">
          <h4 class="text-lg font-bold text-blue-900 border-l-4 border-blue-600 pl-3">2. 센서 신호 처리 및 탐색적 데이터 분석 (EDA)</h4>
          <p class="text-sm text-slate-600">Raw 신호의 미세 노이즈·결측·센서 드리프트를 걸러내고 하드웨어 고유 특성을 규명하기 위한 신호 처리 수행</p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <span class="font-bold text-blue-700 text-xs uppercase tracking-wider block">Cross-Correlation</span>
              <h5 class="font-bold text-slate-900">시차(Lag) · 결합도 분석</h5>
              <p class="text-slate-600 text-xs leading-relaxed">정상 상태와 Failure 직전 구간에서 다중 Cavity 신호 간 상호상관 계수·시간 지연 분석 → 이상 징후 시 특정 Cavity의 Phase 변화가 인접 Cavity와 동위상/역위상으로 커플링되는 상호작용 패턴 포착</p>
            </div>
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <span class="font-bold text-blue-700 text-xs uppercase tracking-wider block">Box Plot</span>
              <h5 class="font-bold text-slate-900">동적 임계치 · 극단 이상치</h5>
              <p class="text-slate-600 text-xs leading-relaxed">운전 모드별 정상/비정상 Phase Error 분포 편차 시각화 → 백색 소음(Noise Floor) 수준의 미세 변동과 장비 셧다운으로 이어지는 특이 신호의 경계 범위 정량화</p>
            </div>
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <span class="font-bold text-blue-700 text-xs uppercase tracking-wider block">Heatmap</span>
              <h5 class="font-bold text-slate-900">장치 간 상관관계</h5>
              <p class="text-slate-600 text-xs leading-relaxed">RF Cavity·전자석·진단장치 간 다변량 상관계수 매트릭스를 Heatmap으로 구성 → 높은 국소 상관성을 도출하여 향후 멀티태스크 러닝 시 파라미터를 공유할 백본 그룹핑 근거 확보</p>
            </div>
          </div>
        </section>

        <!-- 3 -->
        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 mb-6">
          <h4 class="text-lg font-bold text-blue-900 border-l-4 border-blue-600 pl-3">3. 핵심 알고리즘 — Anomaly Transformer</h4>
          <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm space-y-1">
            <h5 class="font-bold text-slate-900">핵심 원리</h5>
            <ul class="list-disc list-inside text-slate-600 space-y-0.5">
              <li>정상 시계열은 인접 시점 간 시간적 연관성(Prior-Association)과 전체 문맥 연관성(Series-Association)이 일정한 반면, 이상 구간에서는 두 연관성 간 <strong>구조적 괴리(Association Discrepancy)</strong> 발생</li>
              <li>Attention과 Reverse Attention을 Minimax 적대적 방식으로 학습 → 정상 신호의 규칙성을 유지하면서 Failure 직전의 미세한 패턴 왜곡을 극대화해 감지</li>
            </ul>
          </div>
          <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm space-y-1">
            <h5 class="font-bold text-slate-900">적용 성과</h5>
            <ul class="list-disc list-inside text-slate-600 space-y-0.5">
              <li>단순 임계치 초과 이전 단계에서 발생하는 Phase Error의 미세한 Pre-failure 시계열 변동(전조 증상)을 노이즈와 분리하여 조기 식별</li>
            </ul>
          </div>
        </section>

        <!-- 4 -->
        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h4 class="text-lg font-bold text-blue-900 border-l-4 border-blue-600 pl-3">4. 성과 및 향후 고도화 방향</h4>
          <div class="rounded-r-lg text-sm text-slate-800">
            <strong>1차연도 성과:</strong> 빔 정지 선제 예측 문제 정의 + EDA(상호상관·Box Plot·Heatmap) 기반 신호 특성 규명 +
            Anomaly Transformer 기반 이진 분류 이상 예측 파이프라인 1차 구축
          </div>
        </section>
      `
    }
  ]
};
