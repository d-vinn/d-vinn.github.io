/* =====================================================================
   Project 팝업 : 위성 SBC 실시간 RMS 스케줄러 & 결정론적 FDIR 시뮬레이터
   - openBootcamp('satellite') 로 열립니다.
   ===================================================================== */

window.BOOTCAMPS = window.BOOTCAMPS || {};

window.BOOTCAMPS.satellite = {
  title: "실시간 RMS 스케줄러 & FDIR 시뮬레이터",
  subtitle: "결정론적 하드 실시간성 & 자율 고장 복구(FDIR)",
  tabs: [
    {
      id: "overview",
      label: "SBC Simulator",
      sub: "Deterministic RT · FDIR",
      html: `
        <header class="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-6 sm:p-8 rounded-2xl shadow-lg mb-6">
          <div class="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase mb-3">
            Real-Time Systems · Fault Tolerance · Avionics
          </div>
          <h3 class="text-xl sm:text-2xl font-extrabold mb-2">실시간 RMS 스케줄러 및 결정론적 FDIR 시뮬레이터</h3>
          <p class="text-slate-300 text-sm leading-relaxed">
            <strong>목적:</strong> 하드웨어 부품 없이 순수 소프트웨어 시뮬레이션 환경에서, 하드 실시간성과 극한 환경에서의 신뢰성·생존성 구현<br>
            <strong>개발 배경:</strong>Jamming 같은 비정상 상황에서, 확률적인 AI나 느린 에러 처리가 아닌 100% 예측 가능한 소프트웨어 아키텍처가 시스템 붕괴를 막고 FDIR를 수행함을 검증하기 위해 기획
          </p>
          <div class="flex flex-wrap gap-1.5 mt-4 text-[11px] font-semibold">
            <span class="bg-white/15 px-2.5 py-1 rounded-full">Python</span>
            <span class="bg-white/15 px-2.5 py-1 rounded-full">OOP 모듈화 구조</span>
          </div>
        </header>

        <!-- 1. RMS 스케줄러 -->
        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 mb-6">
          <h4 class="text-lg font-bold text-blue-900 border-l-4 border-blue-600 pl-3">① RMS 실시간 스케줄러</h4>
          <p class="text-sm text-slate-600">정해진 마감기한 내에 반드시 처리되어야 하는 태스크들의 실행 순서·우선순위 관리</p>
          <ul class="space-y-2 text-sm text-slate-600">
            <li class="flex gap-2"><span class="text-blue-500 font-bold">•</span> <span>주기가 짧고 민감한 작업에 가장 높은 우선순위를 부여하는 RMS 알고리즘 적용</span></li>
            <li class="flex gap-2"><span class="text-blue-500 font-bold">•</span> <span>태스크 실행 시간을 실시간 계측해 주기의 마감기한을 초과하는 Deadline Miss 발생 여부 감시</span></li>
            <li class="flex gap-2"><span class="text-blue-500 font-bold">•</span> <span>연속 데드라인 미스가 임계치(3회)를 넘으면 하드웨어 Watchdog 개념을 트리거해 시스템 전체가 비정상 상태로 빠지는 것을 차단하고 Safe Mode 신호 송출</span></li>
          </ul>
        </section>

        <!-- 2. 통신 패킷 & CRC-16 -->
        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 mb-6">
          <h4 class="text-lg font-bold text-blue-900 border-l-4 border-blue-600 pl-3">② 방산 통신 패킷 구조 및 CRC-16 무결성 검증</h4>
          <ul class="space-y-2 text-sm text-slate-600">
            <li class="flex gap-2"><span class="text-blue-500 font-bold">•</span> <span>패킷 내부에 순서 번호, 페이로드, 무결성 검증용 CRC-16 체크섬 포함</span></li>
            <li class="flex gap-2"><span class="text-blue-500 font-bold">•</span> <span>수신 측에서 수학적 다항식 기반으로 CRC를 재계산해 데이터 오염 여부를 99.9% 확률로 탐지</span></li>
            <li class="flex gap-2"><span class="text-blue-500 font-bold">•</span> <span>15% 확률로 의도적인 비트 반전 또는 체크섬 변조를 일으키는 에러 주입 메커니즘</span></li>
          </ul>
        </section>

        <!-- 3. FDIR 엔진 -->
        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 mb-6">
          <h4 class="text-lg font-bold text-blue-900 border-l-4 border-blue-600 pl-3">③ 결정론적 FDIR 엔진</h4>
          <p class="text-sm text-slate-600">시스템 내부에서 발생하는 타임아웃·통신 에러를 모니터링하고, 사전 정의된 규칙에 따라 자율적으로 생존 조치를 취하는 안전 브레인</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="font-bold text-slate-900 mb-1">Detection &amp; Isolation</h5>
              <p class="text-slate-600">에러 누적 횟수에 따라 시스템 상태를 등급별로 변경</p>
              <p class="text-slate-700 font-semibold mt-1 text-xs">
                <span class="bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded">NOMINAL</span> →
                <span class="bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">DEGRADED</span> →
                <span class="bg-red-100 text-red-700 px-1.5 py-0.5 rounded">SAFE_MODE</span>
              </p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="font-bold text-slate-900 mb-1">Recovery (자율 복구)</h5>
              <p class="text-slate-600">시스템이 SAFE_MODE에 진입해도 방치하지 않고, 제한된 횟수 내에서 에러 카운터·미스 기록을 초기화하고 정상 상태로 되돌리는 RECOVERING 복구 루틴</p>
            </div>
          </div>
        </section>

        <!-- 4. 관제 루프 -->
        <section class="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <h4 class="text-lg font-bold text-blue-900 border-l-4 border-blue-600 pl-3">④ 실시간 관제 및 이벤트 루프</h4>
          <ul class="space-y-2 text-sm text-slate-600">
            <li class="flex gap-2"><span class="text-blue-500 font-bold">•</span> <span>위의 모든 코어 컴포넌트를 100ms 단위의 틱 루프로 동기화하고 구동</span></li>
            <li class="flex gap-2"><span class="text-blue-500 font-bold">•</span> <span>시스템의 실시간 상태 변화를 추적하며, 시뮬레이션 내부에서 발생하는 태스크 지연 및 패킷 에러율을 집계·가시화</span></li>
          </ul>
        </section>
      `
    }
  ]
};
