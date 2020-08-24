# Nest.js-Tutorial-REST-API-CRUD-App


### 소개  
**본 CRUD API는 아래의 예제를 참고하여 구성하였습니다.  
https://www.techiediaries.com/nestjs-tutorial-rest-api-crud/  


Todo List를 Backend 단에서 구현하기 위한 코드.  
#### Example  
POST  |   http://localhost:3000/list/create  
```  
{  
  "title":"Do it RESTful API",  
  "content":"Hellow world!"  
}  
```  
GET   |   http://localhost:3000/list/


### 실행환경  
node Module 은 포함하지 않은 상태입니다.  
install한 node package 를 아래에 기술합니다.  


```  
nest new {projectname}//nest Cli  
npm install --save @nestjs/typeorm typeorm sqlite3  
npm install --save @nestjs/swagger swagger-ui-express  
```

### RESTful 참고 Site  
> 그런 REST API로 괜찮은가  
https://tv.naver.com/v/2292653  
> RESTful이란?
https://nesoy.github.io/articles/2017-02/REST  

