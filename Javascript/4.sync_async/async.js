// 2. 비동기 방식(asynchronous)

/**
 * 현재 실행 중인 작업(Task)가 아직 종료되지 않은 상태라고 해도,
 * 다음에 해야 할 작업을 곧바로 실행하는 방식
 */

const firstWork = () => {
    console.log('첫 번째 작업 진행 중');
}

const secondWork = () => {
    console.log('두 번째 작업 진행 중');
}

// 지정한 타이머(일정 시간) 이후에 콜백 함수 firstWork()를 호출
// 타이머 함수 setTimeout()의 특징 중 하나, 블로킹(작업 중단)을 하지 않고, 비동기적으로 처리함.
setTimeout(firstWork, 3*1000);
secondWork();

/**
 * 이러한 비동기 처리 방식은 현재 실행 중인 작업(Task, ex, firstwork)가 종료되지 않은 상태라고 해도,
 * 다음 작업(secondWrok)을 곧바로 실행하기 때문에 블로킹이 발생하지 않는 장점,
 * 단점 : 작업의 실행 순서가 보장 되지 않음.
 * 
 * 비동기 처리 방식으로 동작하는 JS 함수들 : setTimeout(), setInterval, HTTP 요청, 이벤트 핸들러(EventHandler)
 */