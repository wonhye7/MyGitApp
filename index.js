/*
   index.html 을 위한 javascript code
*/
console.log('index.js');

function bugfix(){
    console.log('기능 오류를 수정하는 함수')
}

function logout(username){
    console.log('로그아웃');
}
function login(username, password) {
    $.ajax({
        type : 'post',           // 타입 (get, post, put 등등)
        url : '/test',           // 요청할 서버url
        async : true,            // 비동기화 여부 (default : true)
        headers : {              // Http header
          "Content-Type" : "application/json",
          "X-HTTP-Method-Override" : "POST"
        },
        dataType : 'text',       // 데이터 타입 (html, xml, json, text 등등)
        data : JSON.stringify({  // 보낼 데이터 (Object , String, Array)
          "no" : no,
          "name" : username,
          "password": password
          
        }),
        success : function(result) { // 결과 성공 콜백함수
            console.log(result);
        },
        error : function(request, status, error) { // 결과 에러 콜백함수
            console.log(error)
        }
    })
};