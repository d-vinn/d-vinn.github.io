/* =====================================================================
   Work Experience 팝업 : (주)퀀토믹
   - openBootcamp('quantomic') 로 열립니다.
   - 담당 역할 : 비전 알고리즘 설계 · 딥러닝/머신러닝 모델링 · 유전체 데이터 전처리 및 통계 분석
   - 수식은 $ ... $ (인라인). 템플릿 문자열이므로 역슬래시는 \\ 로 씁니다.
   ===================================================================== */

window.BOOTCAMPS = window.BOOTCAMPS || {};

window.BOOTCAMPS.quantomic = {
  title: "(주)퀀토믹",
  subtitle: "비전 알고리즘 설계 · 딥러닝/머신러닝 모델링 · 유전체 데이터 전처리 및 통계 분석",
  tabs: [

    /* ===== Project 1 ===== */
    {
      id: "p1",
      label: "Project 1",
      sub: "마블링 분획",
      html: `
        <header class="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-6 sm:p-8 rounded-2xl shadow-lg mb-6">
          <div class="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase mb-3">
            Computer Vision · Statistical Binarization
          </div>
          <h3 class="text-xl sm:text-2xl font-extrabold mb-2">통계적 이진화 &amp; Connected Component Labeling 기반 한우 마블링 분획 알고리즘</h3>
          <p class="text-slate-300 text-sm leading-relaxed">
            핵심 역량 — 원천 영상 노이즈 극복, 맞춤형 컴퓨터 비전 알고리즘 자체 설계, 비지도/휴리스틱 세분화
          </p>
        </header>

        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 mb-6">
          <h4 class="text-lg font-bold text-blue-900 border-l-4 border-blue-600 pl-3">1. 배경 및 과제</h4>
          <ul class="space-y-2 text-sm text-slate-600">
            <li class="flex gap-2"><span class="text-blue-500 font-bold">•</span> <span>한우 단면의 마블링 분포로 육질 등급을 예측하고자 했으나, <strong>모호한 근육–마블링 경계, 육질 갈변, 강한 조명 반사에 의한 백색 포화(Saturation)</strong> 등 심각한 노이즈로 표준 임계치(Thresholding) 기법 적용 불가</span></li>
            <li class="flex gap-2"><span class="text-blue-500 font-bold">•</span> <span>조명 반사 영역을 중앙값 필터링으로 제거하려 했으나, <strong>사전 영역 분할이 선행되어야 적용 가능</strong>하다는 논리적 순환 문제 봉착</span></li>
          </ul>
        </section>

        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 mb-6">
          <h4 class="text-lg font-bold text-blue-900 border-l-4 border-blue-600 pl-3">2. 해결 방안 및 자체 알고리즘 구현</h4>
          <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm space-y-1">
            <h5 class="font-bold text-slate-900">Likelihood 기반 동적 이진화</h5>
            <p class="text-slate-600">픽셀 밝기 분포가 적색(육질)·백색(지방) 2개 모드를 형성하는 <strong>Bimodal Distribution</strong>임에 착안 → 경계 부근 모호 픽셀에 대해 두 분포의 우도를 비교하여 동적 기준점 설정</p>
          </div>
          <div>
            <h5 class="font-bold text-slate-900 text-sm mb-2">Connected Component Labeling(CCL) 기반 2단계 분획 파이프라인</h5>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <span class="bg-blue-800 text-white font-bold px-2 py-0.5 rounded text-[11px]">1단계</span>
                <h6 class="font-bold text-slate-900 pt-1 text-sm">확정 영역 라벨링</h6>
                <p class="text-slate-600">명확한 육질/마블링 코어 영역을 CCL로 인접 연결 컴포넌트화</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <span class="bg-blue-800 text-white font-bold px-2 py-0.5 rounded text-[11px]">2단계</span>
                <h6 class="font-bold text-slate-900 pt-1 text-sm">경계 픽셀 지연 처리</h6>
                <p class="text-slate-600">우도가 모호한 경계 픽셀은 분류 보류 → 1단계 인접 마블링 컴포넌트와의 공간적 결합 연속성을 평가하여 병합 여부 결정</p>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <h4 class="text-lg font-bold text-blue-900 border-l-4 border-blue-600 pl-3">3. 성과 및 의의</h4>
          <ul class="space-y-2 text-sm text-slate-600">
            <li class="flex gap-2"><span class="text-blue-500 font-bold">•</span> <span>Ground Truth 라벨이 부재한 환경에서도 분할 마스크와 원본의 비교를 통해 육질–마블링 분리 성공 검증</span></li>
            <li class="flex gap-2"><span class="text-blue-500 font-bold">•</span> <span>라이브러리 함수에 의존하지 않고 데이터의 <strong>픽셀 통계 특성</strong>을 활용해 도메인 맞춤형 영상처리 알고리즘을 독자 구현하는 엔지니어링 역량 입증</span></li>
          </ul>
        </section>
      `
    },

    /* ===== Project 2 ===== */
    {
      id: "p2",
      label: "Project 2",
      sub: "체중 예측",
      html: `
        <header class="bg-gradient-to-r from-blue-900 to-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-lg mb-6">
          <div class="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase mb-3">
            Multi-modal Deep Learning · Regression
          </div>
          <h3 class="text-xl sm:text-2xl font-extrabold mb-2">ResNet50 특성 추출 &amp; Multi-modal MLP 기반 한우 3D 생체 체중 예측</h3>
          <p class="text-slate-300 text-sm leading-relaxed">
            핵심 역량 — 멀티모달 딥러닝 아키텍처 설계, 데이터 증강, 메모리 병목(OOM) 해결, 융합 회귀 분석
          </p>
        </header>

        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 mb-6">
          <h4 class="text-lg font-bold text-blue-900 border-l-4 border-blue-600 pl-3">1. 문제 정의 및 목표</h4>
          <p class="text-sm text-slate-600">
            한우의 3D 영상 데이터(Side, Sky 뷰)와 신체 계측 정수형 데이터(체고, 체장)를 동시 융합하여
            <strong>도축 전 한우의 체중(kg)을 추정</strong>하는 회귀 모델 구축
          </p>
        </section>

        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 mb-6">
          <h4 class="text-lg font-bold text-blue-900 border-l-4 border-blue-600 pl-3">2. 파이프라인 및 엔지니어링 전략</h4>
          <div class="space-y-3 text-sm">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="font-bold text-slate-900 mb-1">데이터 증강 (Augmentation)</h5>
              <p class="text-slate-600">원본 60장 → Gaussian Noise, Shearing(Warp Affine), Random Rotation($-15^\\circ \\sim 15^\\circ$), Contrast 조정 적용으로 <strong>300장 규모(5배)</strong> 증강</p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="font-bold text-slate-900 mb-1">ResNet50 Backbone 2D Feature Embedding</h5>
              <p class="text-slate-600">ResNet50 Bottleneck 잔차 블록 구조 구현 → Softmax 직전 Global Max Pooling 통과 → <strong>2,048차원 이미지 임베딩 벡터</strong> 추출</p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="font-bold text-slate-900 mb-1">2단계 분리 파이프라인으로 OOM 해결</h5>
              <p class="text-slate-600">고해상도 이미지 + 회귀 헤드를 End-to-End 결합 시 발생하는 <code>Resource Exhausted Error</code>(GPU/RAM 병목) 극복 → Backbone 특성 벡터를 DataFrame에 캐싱한 뒤 MLP 회귀 네트워크로 순차 전달</p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="font-bold text-slate-900 mb-1">멀티모달 결합(Combined) 모델</h5>
              <p class="text-slate-600">이미지 임베딩(2,048) → 점진 축소(1024 → 512 → 256 → 128 → 64 → 32) 후, 정규화된 계측 수치(체장·체고)와 <code>Concatenate</code>하여 최종 체중 예측</p>
            </div>
          </div>
        </section>

        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 prose-table">
          <h4 class="text-lg font-bold text-blue-900 border-l-4 border-blue-600 pl-3">3. 모델 비교 평가 및 인사이트</h4>
          <table>
            <thead>
              <tr><th>모델</th><th>상관계수 $r$</th></tr>
            </thead>
            <tbody>
              <tr><td>컬러 Combined</td><td><strong>0.8142</strong></td></tr>
              <tr><td>컬러 Uncombined</td><td>0.8130</td></tr>
              <tr><td>흑백 Combined</td><td>0.7962</td></tr>
              <tr><td>흑백 Uncombined</td><td>0.7926</td></tr>
            </tbody>
          </table>
          <ul class="space-y-2 text-sm text-slate-600">
            <li class="flex gap-2"><span class="text-blue-500 font-bold">•</span> <span>흑백–컬러 모델 성능 차이가 미미함(약 0.018)을 규명 → <strong>명암 대비·윤곽선(Contour) 정보만으로도 체형의 3차원 기하 특성을 충분히 반영</strong>함을 입증 (Depth Map과 유사)</span></li>
            <li class="flex gap-2"><span class="text-blue-500 font-bold">•</span> <span>이미지 자체에 골격/체형 특성이 농축되어 있어, 체장/체고 수치 추가 결합에 따른 성능 변화가 크지 않음을 수치적으로 검증</span></li>
          </ul>
        </section>
      `
    },

    /* ===== Project 3 ===== */
    {
      id: "p3",
      label: "Project 3",
      sub: "SNP 유전체",
      html: `
        <header class="bg-gradient-to-r from-slate-900 to-indigo-900 text-white p-6 sm:p-8 rounded-2xl shadow-lg mb-6">
          <div class="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase mb-3">
            High-dimensional Genomics · Imputation
          </div>
          <h3 class="text-xl sm:text-2xl font-extrabold mb-2">고차원 SNP 유전체 결측치 보정 &amp; 신경망 표현형 예측</h3>
          <p class="text-slate-300 text-sm leading-relaxed">
            핵심 역량 — 초고차원 희소 데이터 처리, 코사인 유사도 행렬 기반 윈도우 결측치 대치, 딥러닝 회귀
          </p>
        </header>

        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 mb-6">
          <h4 class="text-lg font-bold text-indigo-900 border-l-4 border-indigo-600 pl-3">1. 배경 및 문제 정의</h4>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm mb-2">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
              <span class="text-xs text-slate-400 font-bold block">개체 수</span>
              <strong class="text-slate-800">한우 500 개체</strong>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
              <span class="text-xs text-slate-400 font-bold block">SNP 조합</span>
              <strong class="text-slate-800">33,840 개</strong>
            </div>
            <div class="bg-red-50 p-3 rounded-xl border border-red-200 text-center">
              <span class="text-xs text-red-500 font-bold block">결측치(Null)</span>
              <strong class="text-red-600">845,255 건</strong>
            </div>
          </div>
          <p class="text-sm text-slate-600">비선형 딥러닝 모델로 연속형 생체 표현형(Phenotype)을 예측하는 연구이며, 방대한 결측치 정제가 필수 선결 과제로 대두</p>
        </section>

        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 mb-6">
          <h4 class="text-lg font-bold text-indigo-900 border-l-4 border-indigo-600 pl-3">2. 데이터 엔지니어링 및 결측치 보정 알고리즘</h4>
          <div class="space-y-3 text-sm">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="font-bold text-slate-900 mb-1">유전적 연관성 기반 슬라이딩 윈도우 유사도 행렬</h5>
              <ul class="list-disc list-inside text-slate-600 space-y-0.5">
                <li>염기쌍 염색체 구조 반영 → GC 군(16,937열) / AT 군(16,906열) 분할</li>
                <li>"인접 SNP끼리는 연관 불평형(Linkage Disequilibrium)으로 상호 유사성이 높다"는 유전체 통계 특성 적용</li>
                <li>80개 열 단위 국소 슬라이딩 윈도우 정의 → 전치 행렬에 대한 코사인 유사도 행렬 동적 계산</li>
              </ul>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="font-bold text-slate-900 mb-1">유사 피처 기반 결측치 대치 (Imputation)</h5>
              <p class="text-slate-600">결측값 발생 시 해당 윈도우 내 가장 유사도 높은 열의 동일 행 값을 매핑하는 <strong>반복 수렴 알고리즘</strong> 구현</p>
              <p class="text-slate-700 font-semibold mt-1">결측치 845,255건 → 18,469건 (약 97.8% 제거)</p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="font-bold text-slate-900 mb-1">One-Hot Encoding 및 정규화</h5>
              <p class="text-slate-600">범주형 염기쌍('AA','TA','TT','GG','CG','CC',0)을 7차원 One-Hot 벡터로 확장 후 <code>StandardScaler</code> 적용</p>
            </div>
          </div>
        </section>

        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <h4 class="text-lg font-bold text-indigo-900 border-l-4 border-indigo-600 pl-3">3. 예측 모델링 성과</h4>
          <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm">
            <p class="text-slate-600"><strong>MLP Regression:</strong> Dense(128) – Dropout(0.4) – Dense(64) – Dropout(0.4) – Dense(1)</p>
          </div>
          <div class="grid grid-cols-2 gap-3 text-sm">
            <div class="bg-white p-3 rounded-xl border border-slate-200 text-center shadow-sm">
              <span class="text-xs text-slate-400 font-bold block">Train Loss (MSE)</span>
              <strong class="text-base font-extrabold text-slate-800">0.2912</strong>
            </div>
            <div class="bg-white p-3 rounded-xl border border-slate-200 text-center shadow-sm">
              <span class="text-xs text-slate-400 font-bold block">Test Loss (MSE)</span>
              <strong class="text-base font-extrabold text-slate-800">0.6151</strong>
            </div>
          </div>
          <p class="text-xs text-slate-500">개체 DNA의 33,840차원 유전자 벡터 입력만으로 목표 표현형을 예측하는 베이스라인 파이프라인 완성</p>
        </section>
      `
    },

    /* ===== Project 4 ===== */
    {
      id: "p4",
      label: "Project 4",
      sub: "KPN 도축 최적기",
      html: `
        <header class="bg-gradient-to-r from-indigo-900 to-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-lg mb-6">
          <div class="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase mb-3">
            Statistical Outlier Filtering · Decision Engine
          </div>
          <h3 class="text-xl sm:text-2xl font-extrabold mb-2">통계적 표본 크기 적응형 이상치 정제 &amp; KPN 도축 최적기 분석</h3>
          <p class="text-slate-300 text-sm leading-relaxed">
            핵심 역량 — 표본 통계학적 이상치 판별(Z/t/IQR), 비즈니스 의사결정 알고리즘, 파이프라인 자동화
          </p>
        </header>

        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 mb-6">
          <h4 class="text-lg font-bold text-indigo-900 border-l-4 border-indigo-600 pl-3">1. 분석 목적</h4>
          <p class="text-sm text-slate-600">
            한우 씨수소(KPN) 582두의 자식 데이터 20,252건을 대상으로, 최고 육질 등급(1++) 출현율을 극대화하는
            <strong>KPN별 최적 도축 개월 수</strong>를 도출하는 의사결정 모델 개발
          </p>
        </section>

        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 mb-6">
          <h4 class="text-lg font-bold text-indigo-900 border-l-4 border-indigo-600 pl-3">2. 표본 수 기반 다계층 이상치 정제</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <span class="bg-indigo-800 text-white font-bold px-2 py-0.5 rounded text-[11px]">$N > 30$</span>
              <h6 class="font-bold text-slate-900 pt-1 text-sm">대표본 — Z-score</h6>
              <p class="text-slate-600">정규분포 가정, $\\vert z \\vert \\le 2.0$ 필터링</p>
            </div>
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <span class="bg-indigo-800 text-white font-bold px-2 py-0.5 rounded text-[11px]">$10 \\le N \\le 30$</span>
              <h6 class="font-bold text-slate-900 pt-1 text-sm">중소표본 — t-score</h6>
              <p class="text-slate-600">자유도·표본 표준편차 반영, $\\vert t \\vert \\le 2.0$ 필터링</p>
            </div>
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <span class="bg-indigo-800 text-white font-bold px-2 py-0.5 rounded text-[11px]">$5 \\le N < 10$</span>
              <h6 class="font-bold text-slate-900 pt-1 text-sm">소표본 — IQR</h6>
              <p class="text-slate-600">비모수 통계, 사분위 범위(IQR) 기반 필터링</p>
            </div>
            <div class="p-4 bg-amber-50 rounded-xl border border-amber-200 space-y-1">
              <span class="bg-amber-600 text-white font-bold px-2 py-0.5 rounded text-[11px]">$N < 5$</span>
              <h6 class="font-bold text-amber-900 pt-1 text-sm">극소 표본 — 예외 로직</h6>
              <p class="text-amber-700">백분위수 정의상 IQR 불가 → 무리한 제거 대신 전체 자식 이력을 투명 출력하는 조건부 우회</p>
            </div>
          </div>
          <div class="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg text-sm text-slate-800">
            <strong>정제 결과:</strong> 원천 결측치 102건 + 통계적 이상치 640건 제거 → 신뢰도 높은 <strong>19,510건</strong> 정제 데이터셋 확보.
          </div>
        </section>

        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <h4 class="text-lg font-bold text-indigo-900 border-l-4 border-indigo-600 pl-3">3. KPN 최적 도축기 검색 엔진 및 결과</h4>
          <ul class="space-y-2 text-sm text-slate-600">
            <li class="flex gap-2"><span class="text-indigo-500 font-bold">•</span> <span>도축 개월(24~32개월) × 육질 등급(1++, 1+, 1, 2, 3) 2차원 매트릭스를 생성하고 KPN별 평균 도축 연령 산출</span></li>
            <li class="flex gap-2"><span class="text-indigo-500 font-bold">•</span> <span>KPN 번호 입력 시 최고 등급·최적 도축 시기를 단일 호출로 반환하는 쿼리 함수구축</span></li>
          </ul>
          <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm text-slate-700">
            예시 — <code>search_kpn("KPN1002")</code> → 최고 등급 <strong>1++</strong>, 최적 <strong>31개월</strong> 도축 판정
          </div>
        </section>
      `
    },
  ]
};
