/* =====================================================================
   로보테크 AI 부트캠프 팝업 콘텐츠
   - openBootcamp('robotech') 로 열립니다.
   - 프로젝트를 추가하려면 tabs 배열에 { id, label, sub, html } 항목을 추가하세요.
   ===================================================================== */

window.BOOTCAMPS = window.BOOTCAMPS || {};

window.BOOTCAMPS.robotech = {
  title: "로보테크 AI 부트캠프",
  subtitle: "Edge AI · 온디바이스 비전 · TinyML",
  tabs: [
    {
      id: "cart",
      label: "스마트 운반 카트",
      sub: "Edge AI",
      html: `
        <header class="bg-gradient-to-r from-indigo-900 to-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-lg mb-6">
          <div class="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase mb-3">
            Edge AI &amp; On-Device Vision
          </div>
          <h3 class="text-xl sm:text-2xl font-extrabold mb-2">스마트 운반 카트 실시간 화물 검수 시스템</h3>
          <p class="text-slate-300 text-sm leading-relaxed">
            담당 분야 — Edge AI 파이프라인 구축 및 온디바이스 비전 시스템 구현.
            초소형 보드(ESP32-CAM) 내부에서 신경망 추론을 직접 수행하여 네트워크 지연 없이 화물 상태를 즉각 판별하고 서버 부하를 최소화했습니다.
          </p>
        </header>

        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 mb-6">
          <h4 class="text-lg font-bold text-indigo-900 border-l-4 border-indigo-600 pl-3">💡 Edge AI란?</h4>
          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg text-sm font-medium text-slate-800">
            데이터를 중앙 서버나 클라우드로 보내지 않고, 데이터가 생성되는 말단 하드웨어(기기 자체)에서
            AI 모델을 직접 실행해 실시간으로 추론하는 기술.
          </div>
          <p class="text-xs sm:text-sm text-slate-500">
            본 프로젝트에서는 ESP32-CAM 내부에서 FOMO 추론을 직접 구동하여 적재 화물 상태를 즉시 판별하고, 관제 서버에는 결과값만 전송했습니다.
          </p>
        </section>

        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5 mb-6">
          <h4 class="text-lg font-bold text-indigo-900 border-l-4 border-indigo-600 pl-3">🛠️ 상세 수행 업무 (Edge AI End-to-End Pipeline)</h4>

          <div class="space-y-4">
            <div class="flex gap-3">
              <span class="shrink-0 w-7 h-7 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">1</span>
              <div>
                <h5 class="font-bold text-slate-900 text-sm">데이터 수집 (Data Acquisition)</h5>
                <p class="text-slate-600 text-xs sm:text-sm mt-1">
                  카트 적재 환경을 모사하여 <strong>ESP32-CAM</strong>으로 다양한 조명·각도·배경 조건에서
                  적재 화물(LED 객체: Red / Green / Yellow)의 원본 이미지 데이터를 직접 촬영·수집.
                </p>
              </div>
            </div>

            <div class="flex gap-3">
              <span class="shrink-0 w-7 h-7 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">2</span>
              <div>
                <h5 class="font-bold text-slate-900 text-sm">데이터 라벨링 및 전처리 (Edge Impulse)</h5>
                <p class="text-slate-600 text-xs sm:text-sm mt-1">
                  Edge Impulse에 이미지를 업로드하고 각 객체 영역을 바운딩 박스로 정밀 라벨링 (Red / Green / Yellow 클래스 분류).
                </p>
                <ul class="list-disc list-inside text-slate-600 text-xs sm:text-sm mt-1 space-y-0.5">
                  <li>96×96 해상도 리사이징 및 정규화 블록 구성</li>
                  <li>데이터 증강(Augmentation)으로 조명 변화·흔들림 환경 강건성 확보</li>
                </ul>
              </div>
            </div>

            <div class="flex gap-3">
              <span class="shrink-0 w-7 h-7 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">3</span>
              <div>
                <h5 class="font-bold text-slate-900 text-sm">초경량 FOMO 모델 학습 및 최적화</h5>
                <p class="text-slate-600 text-xs sm:text-sm mt-1">
                  MCU 환경에 최적화된 초경량 객체 탐지 알고리즘 <strong>FOMO (Faster Objects, More Objects)</strong> 학습.
                </p>
                <ul class="list-disc list-inside text-slate-600 text-xs sm:text-sm mt-1 space-y-0.5">
                  <li>RAM/ROM 제약을 고려한 모델 경량화 및 int8 양자화(Quantization)</li>
                  <li>적재함 내 다중 객체의 위치(X, Y)·신뢰도(Confidence Score) 탐지 성능 검증</li>
                </ul>
              </div>
            </div>

            <div class="flex gap-3">
              <span class="shrink-0 w-7 h-7 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">4</span>
              <div>
                <h5 class="font-bold text-slate-900 text-sm">C++ 라이브러리 모듈화 및 배포 (.zip Export)</h5>
                <p class="text-slate-600 text-xs sm:text-sm mt-1">
                  학습·양자화가 완료된 파이프라인을 <strong>Arduino C++ Library (.zip)</strong> 형태로 빌드 및 Export.
                </p>
              </div>
            </div>

            <div class="flex gap-3">
              <span class="shrink-0 w-7 h-7 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">5</span>
              <div>
                <h5 class="font-bold text-slate-900 text-sm">아두이노 IDE 임포트 및 온디바이스 펌웨어 구현</h5>
                <p class="text-slate-600 text-xs sm:text-sm mt-1">
                  모델 라이브러리를 Arduino IDE에 임포트하고 ESP32-CAM 펌웨어에 결합하여 온디바이스 AI 파이프라인 완성.
                </p>
                <ul class="list-disc list-inside text-slate-600 text-xs sm:text-sm mt-1 space-y-0.5">
                  <li><strong>PSRAM 고정 버퍼 할당:</strong> 메모리 누수 방지를 위해 QVGA RGB 버퍼·리사이징 버퍼를 사전 고정 할당</li>
                  <li><strong>온디바이스 전처리:</strong> 캡처 영상을 기기 내부 Nearest-Neighbor 알고리즘으로 96×96 초고속 변환</li>
                  <li><strong>자체 추론 실행:</strong> 2~3초 주기로 온디바이스 FOMO 추론 → 색상별 개수 집계</li>
                </ul>
              </div>
            </div>

            <div class="flex gap-3">
              <span class="shrink-0 w-7 h-7 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">6</span>
              <div>
                <h5 class="font-bold text-slate-900 text-sm">경량 결과 데이터 Wi-Fi 전송</h5>
                <p class="text-slate-600 text-xs sm:text-sm mt-1">
                  고화질 원본 영상을 지속 전송하는 대신, MCU에서 계산된 <strong>JSON 결과 데이터(품목별 개수·좌표)</strong>만
                  관제 PC(PyQt / MySQL)로 전송하도록 웹 서버 엔드포인트(<code>/data</code>, <code>/image</code>) 구축.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 mb-6">
          <h4 class="text-lg font-bold text-indigo-900 border-l-4 border-indigo-600 pl-3">💻 기술 스택</h4>
          <div class="flex flex-wrap gap-1.5">
            <span class="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full border border-slate-200">ESP32-CAM (AI-Thinker)</span>
            <span class="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full border border-slate-200">Edge Impulse</span>
            <span class="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full border border-indigo-100">FOMO (Object Detection)</span>
            <span class="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full border border-slate-200">C / C++</span>
            <span class="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full border border-slate-200">Arduino IDE</span>
            <span class="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full border border-indigo-100">TinyML / On-Device AI</span>
            <span class="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full border border-slate-200">HTTP / Wi-Fi Streaming</span>
          </div>
        </section>

        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 prose-table">
          <h4 class="text-lg font-bold text-indigo-900 border-l-4 border-indigo-600 pl-3">📈 도입 성과 및 기대 효과</h4>
          <div class="overflow-x-auto text-sm">
            <table>
              <thead>
                <tr>
                  <th>구분</th>
                  <th>기존 방식 (서버 전송형 AI)</th>
                  <th>본 프로젝트 (Edge AI 적용)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>통신 부하</strong></td>
                  <td>지속적인 영상 스트리밍으로 대역폭 낭비 심함</td>
                  <td class="font-semibold text-emerald-700">추론 완료된 수량/결과(JSON)만 전송하여 트래픽 최소화</td>
                </tr>
                <tr>
                  <td><strong>실시간성</strong></td>
                  <td>네트워크 지연 시 화물 누락 감지 딜레이 발생</td>
                  <td class="font-semibold text-emerald-700">카트 자체에서 실시간 감지 및 즉각적인 피드백 가능</td>
                </tr>
                <tr>
                  <td><strong>서버 비용</strong></td>
                  <td>중앙 관제 PC/서버의 GPU/CPU 연산 부담 가중</td>
                  <td class="font-semibold text-emerald-700">단말 분산 처리로 중앙 관제 시스템 경량화</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      `
    }
  ]
};
