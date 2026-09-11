/* =====================================================================
   Work Experience 팝업 : Middle Georgia State University
   - openBootcamp('georgia') 로 열립니다.
   - 프로젝트 : B-is-able (시각장애인을 위한 실시간 AI 운동 자세 피드백 웹 서비스)
   - 이미지 : assets/landmark.png, noise.png, rmse.png, web1.png, web2.png, web3.png
   ===================================================================== */

window.BOOTCAMPS = window.BOOTCAMPS || {};

window.BOOTCAMPS.georgia = {
  title: "Middle Georgia State University",
  subtitle: "웹 개발 및 AI 모델링 인턴 · 2024.11 – 2025.01",
  tabs: [
    {
      id: "b-is-able",
      label: "B-is-able",
      sub: "AI Pose Feedback",
      html: `
        <header class="bg-gradient-to-r from-indigo-900 to-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-lg mb-6">
          <div class="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase mb-3">
            Vision AI · Pose Estimation · Barrier-Free Web
          </div>
          <h3 class="text-xl sm:text-2xl font-extrabold mb-2">B-is-able : 시각장애인을 위한 실시간 AI 운동 자세 피드백 웹 서비스</h3>
          <p class="text-slate-300 text-sm leading-relaxed">
            <strong>B-is-able (Blind is Able &amp; Visible)</strong> - 웹캠 기반 비전 AI로 운동 자세 관절 각도 실시간 추출 및 음성(TTS)로 피드백 제공 (Barrier-Free 웹 헬스 트레이너)
          </p>
          <div class="flex flex-wrap gap-2 mt-4 text-[11px] font-semibold">
            <span class="bg-white/15 px-2.5 py-1 rounded-full">3인 팀 프로젝트</span>
          </div>
        </header>

        <!-- 1. 프로젝트 개요 -->
        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 mb-6">
          <h4 class="text-lg font-bold text-indigo-900 border-l-4 border-indigo-600 pl-3">1. 프로젝트 개요</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">Vision</h5>
              <p class="text-slate-600">MediaPipe Pose, OpenCV</p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">머신러닝</h5>
              <p class="text-slate-600">Python, Scikit-learn (GradientBoostingRegressor, MultiOutputRegressor, GridSearchCV), Pandas, NumPy</p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">Backend / Web</h5>
              <p class="text-slate-600">Django, JavaScript, Web Audio / TTS</p>
            </div>
          </div>
        </section>

        <!-- 2. 기획 배경 -->
        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 mb-6">
          <h4 class="text-lg font-bold text-indigo-900 border-l-4 border-indigo-600 pl-3">2. 기획 배경 및 문제 정의</h4>
          <ul class="space-y-2 text-sm text-slate-600">
            <li class="flex gap-2"><span class="text-indigo-500 font-bold">•</span> <span><strong>시각 피드백의 부재:</strong> 비시각장애인은 거울·시각 피드백으로 자세 자가 교정, but 시각장애인은 운동 중 자세 불균형 인지가 어려워 만성 근육 불균형·부상 위험에 노출</span></li>
            <li class="flex gap-2"><span class="text-indigo-500 font-bold">•</span> <span><strong>맞춤형 헬스케어 부족:</strong> 시각장애인을 위한 전문적인 운동 피드백 인프라 전무</span></li>
            <li class="flex gap-2"><span class="text-indigo-500 font-bold">•</span> <span><strong>해결 방안:</strong> 웹캠 비전 AI로 운동 자세(풀업 등)의 관절 좌표·각도 실시간 추출 및 정상 궤적과의 오차 비교를 통한  즉각 음성(TTS) 피드백 제공</span></li>
          </ul>
        </section>

        <!-- 3. 데이터 파이프라인 -->
        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 mb-6">
          <h4 class="text-lg font-bold text-indigo-900 border-l-4 border-indigo-600 pl-3">3. 데이터 수집 및 전처리 파이프라인</h4>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="font-bold text-slate-900 mb-1">데이터 수집</h5>
              <ul class="list-disc list-inside text-slate-600 space-y-0.5">
                <li>정자세: 전문 운동 영상 클립에서 MP4 프레임 단위 추출</li>
                <li>오자세: 잘못된 자세 영상 및 팀원 오자세 동작 직접 촬영</li>
              </ul>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="font-bold text-slate-900 mb-1">MediaPipe Pose 랜드마크 추출</h5>
              <p class="text-slate-600">프레임별 3D 관절 키포인트(어깨·팔꿈치·손목 등) 추출 후 관절 각도(Elbow / Shoulder Angle) 기하학적 연산</p>
            </div>
          </div>

          <figure class="space-y-1.5">
            <img src="assets/landmark.png" alt="MediaPipe Pose 랜드마크 추출 결과"
                 class="rounded-xl border border-slate-200 w-full max-w-xs mx-auto" />
            <figcaption class="text-xs text-slate-400 text-center">MediaPipe Pose 관절 랜드마크 추출 (풀업 동작)</figcaption>
          </figure>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div class="bg-indigo-50 p-4 rounded-xl border border-indigo-100 text-center">
              <span class="text-xs text-indigo-500 font-bold block">수집 훈련 데이터</span>
              <strong class="text-lg font-extrabold text-indigo-800">5,933 건</strong>
            </div>
            <div class="bg-emerald-50 p-4 rounded-xl border border-emerald-100 text-center">
              <span class="text-xs text-emerald-600 font-bold block">이상치 제거 후 정제 데이터</span>
              <strong class="text-lg font-extrabold text-emerald-700">5,836 건</strong>
            </div>
          </div>

          <figure class="space-y-1.5">
            <img src="assets/noise.png" alt="이상치 제거 전/후 Elbow-Shoulder 산점도"
                 class="rounded-xl border border-slate-200 w-full max-w-md mx-auto" />
            <figcaption class="text-xs text-slate-400 text-center">관절 가동 범위를 벗어난 이상치·측정 노이즈 필터링 (제거 전 → 후)</figcaption>
          </figure>
        </section>

        <!-- 4. 모델 -->
        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 mb-6">
          <h4 class="text-lg font-bold text-indigo-900 border-l-4 border-indigo-600 pl-3">4. AI 모델 아키텍처 및 학습 최적화</h4>

          <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm space-y-1">
            <h5 class="font-bold text-slate-900">문제 수식화</h5>
            <p class="text-slate-600"><strong>입력:</strong> 좌/우 팔꿈치 각도 (Left_elbow_angle, Right_elbow_angle)</p>
            <p class="text-slate-600"><strong>타깃:</strong> 좌/우 어깨 정상 궤적 각도 (Left_shoulder_angle, Right_shoulder_angle)</p>
            <p class="text-slate-600">풀업 동작에서 팔꿈치 각도 변화에 따른 좌우 정상 어깨 각도를 예측하여 이상적 기준치 정의</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="font-bold text-slate-900 mb-1">모델 선정 &amp; 파이프라인</h5>
              <ul class="list-disc list-inside text-slate-600 space-y-0.5">
                <li>관절 간 비선형 상호작용 대응 → <strong>Gradient Boosting Regressor</strong></li>
                <li>좌/우 불균형 독립 감지 → <strong>MultiOutputRegressor</strong></li>
              </ul>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="font-bold text-slate-900 mb-1">하이퍼파라미터 튜닝</h5>
              <ul class="list-disc list-inside text-slate-600 space-y-0.5">
                <li><code>GridSearchCV</code> 3-Fold 교차 검증 (27개 조합 · 81회 훈련)</li>
                <li>최적값: learning_rate 0.1 · max_depth 5 · n_estimators 50</li>
              </ul>
            </div>
          </div>

          <figure class="space-y-1.5">
            <img src="assets/rmse.png" alt="GridSearch 파라미터 세트별 RMSE 감소 그래프"
                 class="rounded-xl border border-slate-200 w-full max-w-lg mx-auto" />
            <figcaption class="text-xs text-slate-400 text-center">GridSearch 파라미터 세트별 평균 RMSE (±표준편차) — 9번 조합 이후 수렴</figcaption>
          </figure>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            <div class="bg-white p-3 rounded-xl border border-slate-200 text-center shadow-sm">
              <span class="text-xs text-slate-400 font-bold block">$R^2$ Score</span>
              <strong class="text-base font-extrabold text-indigo-700">0.79</strong>
            </div>
            <div class="bg-white p-3 rounded-xl border border-slate-200 text-center shadow-sm">
              <span class="text-xs text-slate-400 font-bold block">MSE (우/좌 어깨)</span>
              <strong class="text-base font-extrabold text-slate-800">57.51 / 54.80</strong>
            </div>
            <div class="bg-white p-3 rounded-xl border border-slate-200 text-center shadow-sm">
              <span class="text-xs text-slate-400 font-bold block">RMSE</span>
              <strong class="text-base font-extrabold text-slate-800">7.46°</strong>
            </div>
            <div class="bg-emerald-50 p-3 rounded-xl border border-emerald-200 text-center shadow-sm">
              <span class="text-xs text-emerald-600 font-bold block">각도 오차율 (0–180°)</span>
              <strong class="text-base font-extrabold text-emerald-700">≈ 4.14%</strong>
            </div>
          </div>
        </section>

        <!-- 5. 웹 서비스 -->
        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 mb-6">
          <h4 class="text-lg font-bold text-indigo-900 border-l-4 border-indigo-600 pl-3">5. 실시간 웹 서비스 아키텍처 (Django)</h4>
          <ul class="space-y-2 text-sm text-slate-600">
            <li class="flex gap-2"><span class="text-indigo-500 font-bold">•</span> <span><strong>FE–BE 연동:</strong> 클라이언트(웹캠)에서 Canvas API로 주기적 프레임 캡처 → Django 엔드포인트로 POST 전송</span></li>
            <li class="flex gap-2"><span class="text-indigo-500 font-bold">•</span> <span><strong>실시간 추론·판정:</strong> OpenCV &amp; MediaPipe로 관절 각도 연산 → 학습 모델로 정자세 기준 각도 예측 → 실제 각도와 임계치 오차 비교</span></li>
            <li class="flex gap-2"><span class="text-indigo-500 font-bold">•</span> <span><strong>음성(TTS) 알림 쓰레딩:</strong> 불균형 감지 시 음성 안내 + 화면 텍스트 출력(개발자 확인용) Thread로 비동기 재생하여 메인 추론 루프 지연 방지</span></li>
          </ul>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <figure class="space-y-1.5">
              <img src="assets/web1.png" alt="B-is-able 랜딩 페이지" class="rounded-xl border border-slate-200 w-full" />
              <figcaption class="text-xs text-slate-400 text-center">랜딩 페이지</figcaption>
            </figure>
            <figure class="space-y-1.5">
              <img src="assets/web2.png" alt="웹캠 자세 분석 화면" class="rounded-xl border border-slate-200 w-full" />
              <figcaption class="text-xs text-slate-400 text-center">실시간 웹캠 자세 분석</figcaption>
            </figure>
            <figure class="space-y-1.5">
              <img src="assets/web3.png" alt="불균형 감지 음성/텍스트 피드백" class="rounded-xl border border-slate-200 w-full" />
              <figcaption class="text-xs text-slate-400 text-center">불균형 감지 피드백 ("왼쪽 부분에 불균형 존재")</figcaption>
            </figure>
          </div>
        </section>

        <!-- 6. 성과 및 고도화 -->
        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h4 class="text-lg font-bold text-indigo-900 border-l-4 border-indigo-600 pl-3">6. 성과 및 향후 고도화 방안</h4>
          <div class="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg text-sm text-slate-800">
            <strong>성과:</strong> 시각 피드백 없이 음성 안내만으로 자세 불균형을 인지하고 즉각 교정할 수 있음을 사용자 테스트로 입증
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="font-bold text-slate-900 mb-1">시계열 연속성 반영</h5>
              <p class="text-slate-600">정적 프레임 예측 한계 극복을 위해 RNN/LSTM/GRU를 도입, 프레임 간 동작 흐름·속도 일관성 분석</p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="font-bold text-slate-900 mb-1">관절 간 공간-시간 관계 학습</h5>
              <p class="text-slate-600">관절=노드, 뼈대=엣지로 구성한 ST-GCN 도입 → 복합 전신 운동 분류 및 불균형 분석 정밀도 개선</p>
            </div>
          </div>
        </section>
      `
    }
  ]
};
