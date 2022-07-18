/**
 * String을 사용하는 방식
 * 1. ''(single quote), 홑 따옴표
 * 2. ""(double quote), 쌍 따옴표
 * 3. ``(backtick), 템플릿 리터럴
 */

const novel = 'The little Prine';
const author = "Saint-Exupery";

//템플릿 리터럴(Tamplate literal) 방식
console.log(`My favorite novel is ${novel} 
by ${author}`);
//변수를 동적으로 바인딩(binding)한다. 묶어준다. 줄바꿈 가능

//템플릿 리터럴 이전의 줄바꿈 방식
const address =
    'Homer J. Simpson\n' + '742 Evergreen Taxas'; // n(new line)
console.log(address);
// \n은 이스케이브, 줄바꿈 해주는 녀석

function createOAuthString(host, clientId, scope) {
    return host + '/login/oauth/authorize?client_id=' + clientId + '&scope=' + scope
  }

// == 다른 파일의 어떤 코드 라인
createOAuthString('https://github.com', 'abc123', 'repo,user');
// 보안쪽에서 인증관련으로 씀.