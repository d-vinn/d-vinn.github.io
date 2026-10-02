/* =====================================================================
   졸업논문 팝업 : 피카북 (Pick-a-book)
   - openBootcamp('thesis') 로 열립니다.
   - 이미지 : assets/totvssi.png  (RecMind ToT vs SI 비교)
   - 수식은 $ ... $ (인라인). 템플릿 문자열이므로 역슬래시는 \\ 로 씁니다.
   ===================================================================== */

window.BOOTCAMPS = window.BOOTCAMPS || {};

window.BOOTCAMPS.thesis = {
  title: "피카북 (Pick-a-book)",
  subtitle: "LLM · Self-Inspiring 기반 유아·초등 맞춤형 도서 큐레이션 서비스 — 학사 졸업논문",
  tabs: [
    {
      id: "pick-a-book",
      label: "Pick-a-book",
      sub: "LLM · Self-Inspiring",
      html: `
        <header class="bg-gradient-to-r from-indigo-900 to-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-lg mb-6">
          <div class="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase mb-3">
            RAG · LLM Agent · Explainable Recommendation
          </div>
          <h3 class="text-xl sm:text-2xl font-extrabold mb-2">피카북 (Pick-a-book) — LLM 및 Self-Inspiring 기반 유아·초등 맞춤형 도서 큐레이션</h3>
          <p class="text-slate-300 text-sm leading-relaxed">
            <strong>구분:</strong> 충남대학교 정보통계학·인공지능학 학사학위 졸업논문 연구 프로젝트<br>
            <strong>역할:</strong> RAG 파이프라인 엔지니어링, LLM 선정 및 벤치마킹, Self-Inspiring 추론 알고리즘 설계, A/B 테스트 및 통계 분석
          </p>
        </header>

        <!-- 기술 스택 -->
        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 mb-6">
          <h4 class="text-lg font-bold text-indigo-900 border-l-4 border-indigo-600 pl-3">핵심 기술 스택</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">LLM &amp; Agent</h5>
              <p class="text-slate-600">Gemini 1.5 Flash (추론 엔진), GPT-4o (LLM-as-a-Judge), Self-Inspiring(SI) Algorithm</p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">RAG &amp; Vector DB</h5>
              <p class="text-slate-600">ChromaDB, <code>jhgan/ko-sbert-nli</code> (한국어 임베딩)</p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">Backend &amp; Infra</h5>
              <p class="text-slate-600">Python Flask, AWS EC2, Amazon DynamoDB (NoSQL)</p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">Frontend &amp; API</h5>
              <p class="text-slate-600">Android Studio (Kotlin 네이티브 앱), 알라딘 OpenAPI (일 단위 신간/베스트셀러 자동 수집)</p>
            </div>
          </div>
        </section>

        <!-- 1. 배경 및 문제 정의 -->
        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 mb-6">
          <h4 class="text-lg font-bold text-indigo-900 border-l-4 border-indigo-600 pl-3">1. 배경 및 문제 정의</h4>
          <ul class="space-y-2 text-sm text-slate-600">
            <li class="flex gap-2"><span class="text-indigo-500 font-bold">•</span> <span><strong>기존 추천 시스템의 한계:</strong> 협업 필터링 등 전통 기법은 신간·신규 사용자에 대한 콜드 스타트 문제를 가지며, 추천 이유를 설명하기 어려운 블랙박스.</span></li>
            <li class="flex gap-2"><span class="text-indigo-500 font-bold">•</span> <span><strong>사전 학습 LLM의 한계:</strong> 지식 단절(Knowledge Cutoff)로 최신 도서를 인지하지 못하고, 존재하지 않는 도서를 추천하는 환각(Hallucination) 발생.</span></li>
            <li class="flex gap-2"><span class="text-indigo-500 font-bold">•</span> <span><strong>단일 추론(CoT)의 맥락 소외:</strong> "오늘 경주 여행(동적 경험)" + "축구(정적 관심사)"처럼 성격이 다른 복합 입력에서 CoT는 최신성 편향(Recency Bias)으로 한쪽 맥락에만 앵커링되어 다른 맥락을 누락.</span></li>
          </ul>
        </section>

        <!-- 2. 아키텍처 -->
        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 mb-6">
          <h4 class="text-lg font-bold text-indigo-900 border-l-4 border-indigo-600 pl-3">2. 시스템 아키텍처 및 RAG 파이프라인 설계</h4>
          <div class="space-y-3 text-sm">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="font-bold text-slate-900 mb-1">동적 지식 동기화 파이프라인</h5>
              <p class="text-slate-600">알라딘 OpenAPI로 매일 신간·베스트셀러 메타데이터(줄거리, 대상 연령, 카테고리)를 수집해 지식 단절 해소 → <code>jhgan/ko-sbert-nli</code>로 임베딩 생성 후 ChromaDB에 인덱싱하여 실시간 유사도 검색 + 메타데이터 필터링.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h5 class="font-bold text-slate-900 mb-1">2계층 데이터 관리 (Hybrid DB)</h5>
                <ul class="list-disc list-inside text-slate-600 space-y-0.5">
                  <li><strong>Amazon DynamoDB:</strong> 계정·사용자 프로필·독서 이력</li>
                  <li><strong>ChromaDB:</strong> 줄거리·도서 특성 벡터 시맨틱 검색 전담</li>
                </ul>
              </div>
              <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h5 class="font-bold text-slate-900 mb-1">클라이언트–서버 분리</h5>
                <p class="text-slate-600">Kotlin Android 앱 $\\leftrightarrow$ AWS EC2 환경의 Python Flask RESTful API 통신 구조.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- 3. LLM 벤치마킹 -->
        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 mb-6">
          <h4 class="text-lg font-bold text-indigo-900 border-l-4 border-indigo-600 pl-3">3. LLM 추론 엔진 벤치마킹 및 선정 (LLM-as-a-Judge)</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="font-bold text-slate-900 mb-1">평가 설계</h5>
              <ul class="list-disc list-inside text-slate-600 space-y-0.5">
                <li>대상: <code>gemini-1.5-flash</code>, <code>gemini-2.5-flash</code>, <code>gpt-4o-mini</code>, <code>gpt-4.1-nano</code> 등 경량 고효율 모델군</li>
                <li>기준: API 운영 비용 · 중간 쿼리 생성 품질 · 최종 추천/서사 품질</li>
                <li>방법: 복합 입력 테스트 케이스 부여 후 GPT-4o를 심판으로 활용한 블라인드 랭킹 평가</li>
              </ul>
            </div>
            <div class="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
              <h5 class="font-bold text-emerald-900 mb-1">선정 결과 — <code>gemini-1.5-flash</code></h5>
              <ul class="list-disc list-inside text-emerald-800 space-y-0.5">
                <li>비정형 입력 → ChromaDB 검색 쿼리 변환 능력이 가장 정교</li>
                <li>2개 이상 맥락을 창의적 스토리텔링으로 융합하는 추천 사유 품질 1위</li>
                <li>확장 시 API 유지비용 관점 압도적 가성비</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- 4. Self-Inspiring -->
        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 mb-6">
          <h4 class="text-lg font-bold text-indigo-900 border-l-4 border-indigo-600 pl-3">4. Self-Inspiring(SI) 알고리즘을 통한 복합 맥락 추론 고도화</h4>
          <ul class="space-y-2 text-sm text-slate-600">
            <li class="flex gap-2"><span class="text-indigo-500 font-bold">•</span> <span><strong>ToT / CoT 한계 극복:</strong> ToT는 가지치기(Pruning) 과정에서 비선택 경로의 유용한 정보가 영구 폐기되는 손실 발생.</span></li>
            <li class="flex gap-2"><span class="text-indigo-500 font-bold">•</span> <span><strong>SI 메커니즘:</strong> '오늘 한 일(동적 경험)' 경로와 '주요 관심사(정적 성향)' 경로를 강제 분리하여 독립 병렬 탐색 → 어느 경로도 버리지 않고 모든 탐색 상태(State)를 보존한 뒤, 최종 단계에서 두 관점을 종합하여 다음 행동 결정.</span></li>
            <li class="flex gap-2"><span class="text-indigo-500 font-bold">•</span> <span><strong>예시:</strong> "경주 여행" + "축구" 입력 시, 단순 운동 도서가 아니라 역사와 스포츠 협동심을 관통하는 융합 추천 도서 + 설득력 있는 스토리텔링 생성.</span></li>
          </ul>
          <figure class="space-y-1.5">
            <img src="assets/totvssi.png" alt="RecMind ToT와 SI 추론 트레이스 비교"
                 class="rounded-xl border border-slate-200 w-full mx-auto" />
            <figcaption class="text-xs text-slate-400 text-center">RecMind ToT vs SI — 비선택 경로 정보 폐기(ToT) 대 전체 탐색 상태 보존(SI)</figcaption>
          </figure>
        </section>

        <!-- 5. A/B Test -->
        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 mb-6">
          <h4 class="text-lg font-bold text-indigo-900 border-l-4 border-indigo-600 pl-3">5. 정량적 검증 (A/B Test) 및 통계적 유효성</h4>
          <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm">
            <p class="text-slate-600"><strong>실험 설계:</strong> 초등학생 학부모($N=8$) 대상 동일 피험자 반복 측정(Within-Subjects), CoT(대조군) vs SI(실험군) 블라인드 평가 (5점 리커트). 분석: 대응표본 t-검정(Paired T-test).</p>
          </div>
          <div class="prose-table">
            <table>
              <thead>
                <tr><th>평가 지표</th><th>SI</th><th>CoT</th><th>차이 · 유의성</th></tr>
              </thead>
              <tbody>
                <tr><td>관심 카테고리 반영도</td><td><strong>4.60</strong></td><td>3.25</td><td>+1.35 · $p < 0.05$</td></tr>
                <tr><td>오늘의 일(경험) 반영도</td><td><strong>4.60</strong></td><td>4.20</td><td>+0.40 · $p < 0.05$</td></tr>
                <tr><td>추천 이유의 자연스러움</td><td><strong>4.80</strong></td><td>4.12</td><td>+0.68 · $p < 0.05$</td></tr>
              </tbody>
            </table>
          </div>
          <ul class="space-y-2 text-sm text-slate-600">
            <li class="flex gap-2"><span class="text-indigo-500 font-bold">•</span> <span>CoT의 고질적 문제인 '기존 관심사 소외/누락'을 SI가 성공적으로 방어.</span></li>
            <li class="flex gap-2"><span class="text-indigo-500 font-bold">•</span> <span>기계적 키워드 나열이 아닌, 아이의 일상과 책의 주제의식을 관통하는 내러티브 생성 성공.</span></li>
            <li class="flex gap-2"><span class="text-indigo-500 font-bold">•</span> <span>전 지표에서 $p < 0.05$ 수준의 통계적 유의성 확보 → 복합 맥락 처리 엔진으로서 SI의 효용성 실증.</span></li>
          </ul>
        </section>

        <!-- 6. 성과 요약 -->
        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <h4 class="text-lg font-bold text-indigo-900 border-l-4 border-indigo-600 pl-3">6. 성과 요약 및 인사이트</h4>
          <div class="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg text-sm text-slate-800 space-y-1">
            <p>단순 RAG 구현을 넘어 최신 AI 에이전트 추론 기법(SI)을 프로덕트에 접목 → 단일 스레드 LLM의 추론 편향(Anchoring / Recency Bias)을 <strong>아키텍처 수준에서 해결</strong>.</p>
            <p>학부모·아동이 납득할 수 있는 <strong>설명 가능한 추천(Explainable Recommendation)</strong>을 구현하여 플랫폼 신뢰도 확보.</p>
          </div>
        </section>
      `
    }
  ]
};
