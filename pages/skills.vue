<script setup lang="ts">
useHead({
  title: '기술 스택 | Portfolio',
})

/** 기술별 실무 활용 — 프로젝트 상세와 중복되지 않게 “무엇에 썼는지” 중심 */
const skillCategories = [
  {
    title: 'Frontend',
    icon: 'heroicons:computer-desktop-20-solid',
    items: [
      {
        name: 'Vue 3 / Nuxt 3',
        icon: 'mdi:vuejs',
        summary:
          '지능형 영상 비식별화 플랫폼 메인·BO(Vite), 3D 전장 상황 인지 시스템·전장 정보 편집기 SPA, 본 포트폴리오(Nuxt 3)에서 컴포넌트·라우팅·상태를 구성했습니다. 지능형 영상 비식별화 플랫폼에서는 SockJS·webstomp-client로 STOMP 구독해 진행률·파일 완료 이벤트를 UI에 반영했습니다.',
        projectSlugs: ['vision-factory', 'tactical-viz', 'tactical-viz-cop'],
      },
      {
        name: 'Next.js / React 19',
        icon: 'simple-icons:nextdotjs',
        summary:
          '개인 개발 블로그 (dev-blog)에서 App Router·Server Actions·콘텐츠 파이프라인을 구축했고, e-commerce MSA에서는 Vite 기반 React 클라이언트로 주문·상품 흐름을 연결했습니다.',
        projectSlugs: ['dev-blog', 'sparta-ecommerce-msa'],
      },
      {
        name: 'Electron',
        icon: 'mdi:electron-framework',
        summary:
          '지능형 영상 비식별화 플랫폼에서 데스크톱 셸·IPC로 폴더 선택·재귀 스캔, ssh2-sftp-client 기반 SFTP 업·다운로드, SQLite(수동 비식별 메타), Sharp·FFmpeg 로컬 미디어 처리, electron-updater 배포를 맡았습니다. 렌더러는 isElectron() 분기로 웹과 동일 코드베이스를 유지했습니다.',
        projectSlugs: ['vision-factory'],
      },
      {
        name: 'PrimeVue / Quasar',
        icon: 'mdi:vuejs',
        summary:
          '3D 전장 상황 인지 시스템 지휘·관리 UI(PrimeVue), Quasar 기반 멀티 클라이언트에서 폼·테이블·다이얼로그 패턴을 표준화했습니다. 지능형 영상 비식별화 플랫폼 메인은 PrimeVue 4 + Tailwind 4 조합으로 업무 화면을 구성했습니다.',
        projectSlugs: ['tactical-viz', 'vision-factory'],
      },
      {
        name: 'Tailwind CSS',
        icon: 'mdi:tailwind',
        summary:
          '전장 정보 편집기·관리 화면, 포트폴리오, 지능형 영상 비식별화 플랫폼 BO/메인 일부에서 유틸리티 퍼스트로 레이아웃·반응형을 맞췄습니다.',
        projectSlugs: ['tactical-viz-cop', 'vision-factory'],
      },
      {
        name: 'Pinia',
        icon: 'mdi:database',
        summary:
          '대규모 지도·실시간 알림·태스크 목록 등 전역 상태를 스토어로 분리하고, 지도 모듈과 UI 레이어 간 동기화를 설계했습니다.',
        projectSlugs: ['tactical-viz', 'tactical-viz-cop', 'vision-factory'],
      },
      {
        name: 'TypeScript',
        icon: 'mdi:language-typescript',
        summary:
          '컴포넌트 props, 지도·좌표 유틸, API 응답 타입을 명시해 리팩터링 비용을 줄였습니다.',
        projectSlugs: ['dev-blog', 'sparta-ecommerce-msa', 'tactical-viz-cop'],
      },
    ],
  },
  {
    title: 'Backend',
    icon: 'heroicons:server-20-solid',
    items: [
      {
        name: 'Spring Boot 3',
        icon: 'mdi:leaf',
        summary:
          '지능형 영상 비식별화 플랫폼·3D 전장 상황 인지 시스템 API에서 멀티모듈(예: front_api, back_api, common), REST, 트랜잭션 경계를 구성했습니다. 지능형 영상 비식별화 플랫폼은 Spring Security·JWT, WebSocket STOMP 설정, RabbitMQ·Redis 연동 지점을 백엔드에서 조율했습니다.',
        projectSlugs: ['vision-factory', 'tactical-viz'],
      },
      {
        name: 'Spring Boot 2.7 / 멀티 앱 (AI 학습 데이터 관리 플랫폼)',
        icon: 'mdi:leaf',
        summary:
          'resource_front_web(JSP·Tiles·세션), resource_api(JWT 지향 REST), resource_consumer(@RabbitListener), resource_common_lib(도메인·MyBatis·플러그인 공유) 구조에서 기능을 나눠 구현·연동했습니다.',
        projectSlugs: ['resource-admin'],
      },
      {
        name: 'Spring Cloud / MSA',
        icon: 'mdi:cloud-outline',
        summary:
          'e-commerce에서 Gateway 라우팅, 서비스 분리, OpenFeign·통합 테스트(TestContainers)로 MSA 학습 범위를 코드로 고정했습니다.',
        projectSlugs: ['sparta-ecommerce-msa'],
      },
      {
        name: 'Spring Security / JWT',
        icon: 'mdi:shield-lock',
        summary:
          'SaaS·C4I·AI 학습 데이터 관리 플랫폼 API에서 인증·인가, AI 학습 데이터 관리 플랫폼은 세션 JDBC와 API JWT를 역할에 맞게 사용하는 패턴을 다뤘습니다.',
        projectSlugs: ['vision-factory', 'tactical-viz', 'resource-admin'],
      },
      {
        name: 'MyBatis / JPA',
        icon: 'mdi:database-search',
        summary:
          'AI 학습 데이터 관리 플랫폼·레거시 연동 구간에서 복잡 SQL을 XML 매퍼로 유지보수하고, 신규 도메인은 엔티티·리포지토리로 분리했습니다.',
        projectSlugs: ['resource-admin', 'sparta-ecommerce-msa'],
      },
      {
        name: 'REST API 설계',
        icon: 'mdi:api',
        summary:
          '프론트·Electron·Python 워커·외부 시스템이 같은 계약으로 동작하도록 엔드포인트·페이로드·에러 응답을 정리했습니다.',
        projectSlugs: ['vision-factory', 'tactical-viz', 'resource-admin'],
      },
      {
        name: 'Kafka',
        icon: 'simple-icons:apachekafka',
        summary:
          'e-commerce에서 서비스 간 이벤트·보상 트랜잭션 흐름을 Kafka로 연습·구현했습니다.',
        projectSlugs: ['sparta-ecommerce-msa'],
      },
      {
        name: 'RabbitMQ',
        icon: 'mdi:rabbit',
        summary:
          '지능형 영상 비식별화 플랫폼에서 파일 등록 후 큐로 AI 워커에 작업을 넘기고, 수동 비식별 시 tracking_zeroshot·video_selective_blur 등 추가 큐로 후속 처리를 분기했습니다. AI 학습 데이터 관리 플랫폼에서는 플러그인(SFTP import/export, 비식별 등)을 큐 기반 비동기로 발행·소비했습니다.',
        projectSlugs: ['vision-factory', 'resource-admin'],
      },
      {
        name: 'WebSocket (STOMP)',
        icon: 'mdi:lan-connect',
        summary:
          '지능형 영상 비식별화 플랫폼에서 Redis 구독 결과를 STOMP로 클라이언트에 내려 진행률·파일 단위 완료·태스크 종료를 실시간 반영했습니다. 3D 전장 상황 인지 시스템에서는 상황·알림 브로드캐스트에 사용했습니다.',
        projectSlugs: ['vision-factory', 'tactical-viz'],
      },
    ],
  },
  {
    title: 'GIS / Map',
    icon: 'heroicons:map-20-solid',
    items: [
      {
        name: 'OpenLayers',
        icon: 'mdi:map',
        summary:
          '전장 정보 편집기에서 공통작전상황도 레이어·인터랙션, Provider/Manager 계층과 함께 확장 가능한 지도 모듈을 구성했습니다.',
        projectSlugs: ['tactical-viz-cop'],
      },
      {
        name: 'Cesium 3D',
        icon: 'mdi:earth',
        summary:
          '3D 전장 상황 인지 시스템에서 3D 지형·자산 시각화, 카메라·타임라인 연동으로 지휘 화면을 구현했습니다.',
        projectSlugs: ['tactical-viz'],
      },
      {
        name: 'MIL-STD-2525D',
        icon: 'mdi:shield-outline',
        summary:
          'NATO 표준 군사 부호 렌더링·스타일 규칙을 전장 정보 편집기에 적용했습니다.',
        projectSlugs: ['tactical-viz-cop'],
      },
      {
        name: 'MGRS / proj4',
        icon: 'mdi:map-marker-radius',
        summary:
          '작전 좌표 변환·그리드 오버레이를 클라이언트·유틸에 녹였습니다.',
        projectSlugs: ['tactical-viz', 'tactical-viz-cop'],
      },
      {
        name: 'GeoTools / JTS',
        icon: 'mdi:vector-polygon',
        summary:
          '서버 측 지오메트리·공간 연산 보조 로직을 연동·검증했습니다.',
        projectSlugs: ['tactical-viz'],
      },
      {
        name: 'Turf.js',
        icon: 'mdi:vector-line',
        summary:
          '전장 정보 편집기에서 거리·범위 등 클라이언트 지리 분석을 수행했습니다.',
        projectSlugs: ['tactical-viz-cop'],
      },
    ],
  },
  {
    title: 'AI / ML & 실시간',
    icon: 'heroicons:cpu-chip-20-solid',
    items: [
      {
        name: 'Python (워커·플러그인)',
        icon: 'mdi:language-python',
        summary:
          '지능형 영상 비식별화 플랫폼 Python 컨슈머에서 videotoimage(FFmpeg 프레임 추출), detection(YOLO+BYTETrack JSON), blur/replace, zeroshot_track(ODTrack), zeroshot_blur(OpenCV+FFmpeg) 파이프라인을 큐 인자(argv) 기준으로 연결했습니다. AI 학습 데이터 관리 플랫폼 plugin_video_to_image에서는 OpenCV·pika·SFTP로 영상→이미지 변환을 Java 파이프라인과 맞췄습니다.',
        projectSlugs: ['vision-factory', 'resource-admin'],
      },
      {
        name: 'Redis Pub/Sub',
        icon: 'mdi:database-clock',
        summary:
          '지능형 영상 비식별화 플랫폼에서 start, fileDown, selectiveEnd, progress, end, zeroshotTrackEnd, zeroshotBlurEnd 등 채널로 워커→API→소켓 경로를 설계해 DB 폴링 없이 UI를 갱신했습니다.',
        projectSlugs: ['vision-factory'],
      },
      {
        name: 'YOLO / 검출·트래킹',
        icon: 'mdi:target',
        summary:
          '검출 JSON 스키마(bbox, track_id, class)와 후속 blur/replace 큐 분기를 맞추고, 수동 비식별 시 ODTrack 기반 제로샷 추적 산출물을 Electron·SFTP와 동기화했습니다.',
        projectSlugs: ['vision-factory'],
      },
      {
        name: 'Stable Diffusion / ControlNet / IP-Adapter',
        icon: 'mdi:image-filter-frames',
        summary:
          '교체형 비식별 파이프라인(얼굴 등)에서 생성 모델 경로를 서비스 요청·큐 페이로드와 연결했습니다.',
        projectSlugs: ['vision-factory'],
      },
      {
        name: 'OpenCV / FFmpeg',
        icon: 'mdi:video-outline',
        summary:
          '블러·프레임 처리·오디오 합성 등 워커·Electron 측 전처리·후처리에 사용했습니다.',
        projectSlugs: ['vision-factory', 'resource-admin'],
      },
    ],
  },
  {
    title: 'Database',
    icon: 'heroicons:circle-stack-20-solid',
    items: [
      {
        name: 'PostgreSQL',
        icon: 'mdi:elephant',
        summary:
          '3D 전장 상황 인지 시스템 운영 데이터·공간 확장, 개인 개발 블로그 (dev-blog) 댓글(Prisma) 등에 사용했습니다.',
        projectSlugs: ['tactical-viz', 'dev-blog'],
      },
      {
        name: 'MariaDB / MySQL',
        icon: 'mdi:database',
        summary:
          'AI 학습 데이터 관리 플랫폼 정형 메타(RawSet 등), e-commerce 서비스별 DB 트랜잭션에 사용했습니다.',
        projectSlugs: ['resource-admin', 'sparta-ecommerce-msa'],
      },
      {
        name: 'Redis',
        icon: 'mdi:lightning-bolt',
        summary:
          '지능형 영상 비식별화 플랫폼 작업 진행·건수·해시 네임스페이스(taskId 등)로 API와 워커 간 단기 상태를 공유했습니다.',
        projectSlugs: ['vision-factory', 'sparta-ecommerce-msa'],
      },
      {
        name: 'MongoDB',
        icon: 'mdi:leaf-circle',
        summary:
          'AI 학습 데이터 관리 플랫폼에서 스키마가 유연한 문서·플러그인 산출물 저장에 사용했습니다.',
        projectSlugs: ['resource-admin'],
      },
      {
        name: 'SQLite',
        icon: 'mdi:database-outline',
        summary:
          '지능형 영상 비식별화 플랫폼 Electron에서 수동 비식별 선별·프레임 메타를 로컬 DB에 적재·조회했습니다.',
        projectSlugs: ['vision-factory'],
      },
      {
        name: 'Ehcache / Caffeine',
        icon: 'mdi:cached',
        summary:
          'API 응답·도형 스타일 등 애플리케이션 캐시 계층을 구성했습니다.',
        projectSlugs: ['tactical-viz'],
      },
    ],
  },
  {
    title: 'Infrastructure & DevOps',
    icon: 'heroicons:cloud-20-solid',
    items: [
      {
        name: 'Docker',
        icon: 'mdi:docker',
        summary:
          '서비스·추론 워커 이미지화, 포트폴리오 EC2 배포를 위한 Nginx 기반 멀티 스테이지 빌드 구성을 관리합니다.',
        projectSlugs: ['vision-factory', 'sparta-ecommerce-msa'],
      },
      {
        name: 'AWS',
        icon: 'mdi:aws',
        summary:
          'EC2 인스턴스 생성 및 보안 그룹 설정, 탄력적 IP(EIP) 연결을 통해 서비스를 클라우드에 배치했습니다. 현재 보고 계신 포트폴리오 프로젝트(http://3.106.133.249:8082/)의 호스팅을 구축했습니다.',
        projectSlugs: [],
      },
      {
        name: 'GitHub Actions',
        icon: 'mdi:github',
        summary:
          '푸시 시 빌드·테스트 자동화, Docker 이미지를 GHCR로 전송하고 SSH 액션을 통해 EC2 서버의 컨테이너를 갱신하는 CI/CD 파이프라인을 구축했습니다.',
        projectSlugs: ['sparta-ecommerce-msa'],
      },
      {
        name: 'Kubernetes',
        icon: 'mdi:kubernetes',
        summary:
          'e-commerce에서 매니페스트·배포 구조를 학습·적용했습니다.',
        projectSlugs: ['sparta-ecommerce-msa'],
      },
      {
        name: 'Linux / Shell',
        icon: 'mdi:linux',
        summary:
          '서버 운영·배치·로그 점검 자동화 스크립트를 유지했습니다.',
        projectSlugs: ['vision-factory', 'resource-admin'],
      },
      {
        name: 'Nginx',
        icon: 'mdi:server',
        summary:
          '리버스 프록시·정적·업스트림 구성을 다뤘습니다. 포트폴리오 Docker 이미지 내에서 정적 파일을 서빙하도록 설정했습니다.',
        projectSlugs: ['vision-factory', 'tactical-viz'],
      },
      {
        name: 'Git',
        icon: 'mdi:git',
        summary:
          '멀티 레포·브랜치 전략, 코드 리뷰로 팀 규칙을 맞췄습니다.',
        projectSlugs: [],
      },
      {
        name: 'Prometheus',
        icon: 'mdi:chart-timeline-variant',
        summary:
          '메트릭 수집·기본 대시보드 연동을 경험했습니다.',
        projectSlugs: ['tactical-viz'],
      },
      {
        name: 'ngrok',
        icon: 'simple-icons:ngrok',
        summary:
          '로컬 서버를 외부로 노출하여 결제 리다이렉트, 웹훅 등 외부 시스템과의 실시간 인터랙션을 검증하고 디버깅하는 데 활용했습니다.',
        projectSlugs: ['sparta-ecommerce-msa'],
      },
    ],
  },
]

const projectLabels: Record<string, string> = {
  'vision-factory': '지능형 영상 비식별화 플랫폼',
  'tactical-viz': '3D 전장 상황 인지 시스템',
  'tactical-viz-cop': '전장 정보 편집기',
  'resource-admin': 'AI 학습 데이터 관리 플랫폼',
  'dev-blog': '개인 개발 블로그 (dev-blog)',
  'sparta-ecommerce-msa': 'e-commerce MSA',
}
</script>

<template>
  <div class="pt-24">
    <section class="py-14 sm:py-20 bg-surface-50">
      <div class="section-container">
        <p class="text-sm font-semibold text-brand-500 tracking-wide mb-3">
          Skills
        </p>
        <h1 class="text-2xl sm:text-3xl font-display font-bold text-surface-800 tracking-tight mb-3">
          기술 스택
        </h1>
        <p class="text-sm text-surface-600 max-w-2xl leading-relaxed mb-2">
          나열이 아니라, <strong class="text-surface-800">실무·개인 프로젝트에서 해당 기술로 무엇을 했는지</strong>를 정리했습니다.
          시스템 흐름·아키텍처 다이어그램은 <NuxtLink to="/projects" class="text-brand-600 font-semibold hover:underline">프로젝트</NuxtLink> 탭을 참고해 주세요.
        </p>
        <p class="text-xs text-surface-500 max-w-2xl">
          자기소개 탭에서는 정체성·강점·경력 요약만 다룹니다.
        </p>
      </div>
    </section>

    <section class="py-14 sm:py-20 bg-white border-t border-surface-100">
      <div class="section-container space-y-14 sm:space-y-16">
        <div
          v-for="cat in skillCategories"
          :key="cat.title"
        >
          <div class="flex items-center gap-2.5 mb-6">
            <div class="w-9 h-9 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center">
              <Icon :name="cat.icon" class="w-5 h-5 text-brand-600" />
            </div>
            <h2 class="text-lg font-bold text-surface-800 tracking-tight">
              {{ cat.title }}
            </h2>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div
              v-for="item in cat.items"
              :key="item.name"
              class="p-5 rounded-xl border border-surface-100 bg-surface-50/50 hover:border-brand-200/80 transition-colors"
            >
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-lg bg-white border border-surface-200 flex items-center justify-center flex-shrink-0">
                  <Icon :name="item.icon" class="w-5 h-5 text-surface-600" />
                </div>
                <div class="min-w-0 flex-1">
                  <h3 class="text-sm font-bold text-surface-800 mb-1.5">
                    {{ item.name }}
                  </h3>
                  <p class="text-xs text-surface-600 leading-relaxed mb-3">
                    {{ item.summary }}
                  </p>
                  <div v-if="item.projectSlugs?.length" class="flex flex-wrap gap-1.5">
                    <NuxtLink
                      v-for="slug in item.projectSlugs"
                      :key="slug"
                      :to="`/projects/${slug}`"
                      class="inline-flex items-center gap-0.5 text-[10px] font-bold px-2 py-0.5 rounded-md bg-brand-50 text-brand-700 border border-brand-100 hover:bg-brand-100 transition-colors"
                    >
                      {{ projectLabels[slug] ?? slug }}
                      <Icon name="heroicons:arrow-top-right-on-square-20-solid" class="w-3 h-3 opacity-70" />
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
