# Spring   
  
  #### [ 2022-08-31 ]  
  
  ## 목차  
  * #### [[ 
      
---------------------------------------------------------------------------------------------------------------------------------------------------
  
* ### 페이징  

  웹사이트의 게시판 페이지를 만드는 작업을 알아보자.  
    
  - 반드시 GET 방식으로만 처리한다  
    
  - 이동할 때 페이지 번호 를가지고 다닌다  
    
  - 페이징 처리하는 로직을 ```Criteria```, ```PageVO```클래스로 분류한다  

* ### Criteria.class  

  페이징을 처리하는 기준을 가진 클래스이다.

  **Criteria.java**
  ```java
  @Data
  public class Criteria {

    private int pageNum; // 조회하는 페이지 번호
    private int amount; // 데이터를 몇개씩 가져올건지

    // 페이지가 넘어오지 않는경우 기본값
    public Criteria() {
      this.pageNum = 1;
      this.amount = 10;
    }

    // 페이지번호가 넘어오는 경우
    public Criteria(int pageNum, int amount) {
      this.pageNum = pageNum;
      this.amount = amount;
    }

    // limit구문의 첫번째 값에 전달될 getter
    public int getPageStart() {
      return (pageNum-1) * amount;
    }

  }
  ```
  
  **MySQL**
  ```sql
  ORDER BY ... DESC ... LIMIT #{pageStart}, #{amount}
  ```
  이렇게 정렬 후 LIMIT을 이용하면 원하는 값부터 몇개 데이터를 가져올건지 쿼리문을 작성해 줄 수 있다.  
    
* ### PageVO.class  

  페이징을 계산 처리하는 클래스이다.  
    
  **PageVO.java**
  ```java
  @Data
  public class PageVO {

    // 화면에 페이지네이션을 그리는 클래스
    private int end; //  게시판을 화면에 보여질 마지막 페이지 번호.
    private int start; // 게시판을 화면에 보여질 첫번째 페이지 번호.
    private boolean next; // 다음버튼 활성화 여부
    private boolean prev; // 이전버튼 활설화 여부

    private int realEnd; // 게시판의 실제 마지막 페이지 번호.

    private int page; // 현재 조회하는 페이지
    private int amount; // 데이터 개수
    private int total; // 전체게시글 수

    private Criteria cri; // 페이지 기준 클래스

    // PageVO는 생성될때 반드시 cri를 받음
    public PageVO(Criteria cri, int total) {
      this.cri = cri;
      this.amount = cri.getAmount();
      this.page = cri.getPageNum();
      this.total = total;

      // 1. 끝 페이지 계산 
      this.end = (int)(Math.ceil(this.page/10.0)) * 10; 

      // 2. 시작페이지 계산
      // 공식 end - 페이지네이션 개수 + 1
      this.start = this.end - 10 + 1;

      // 3. 실제끝번호 계산
      // 데이터가 60개 있다고 가정할 때, 5번 페이지 조회시 end = 6
      // 데이터가 112개 있다고 가정할 때, 11번 페이지 조회시 end = 12
      realEnd = (int)(Math.ceil(this.total/(double)this.amount));

      // 4. 마지막 페이지의 결정
      // 데이터가 112개 있다고 가정, 5번 페이지 조회시 end = 10
      // 같은 상황일 때 11번 페이지 조회시에는 end = 11로 만들어야함
      this.end = this.end > this.realEnd ? this.realEnd : this.end;

      // 5. 이전버튼 활성화 여부
      this.prev = this.start > 1;

      // 6. 다음버튼 활성화 여부
      this.next = this.end < this.realEnd;

    }
  }
  ```  
    
  **xml**
  
    
  **jsp**
  ```jsp
  <!-- pagination -->
	<div class="pagination">
		<a href="보낼 곳?pageNum=1&amount=${pageVO.amount}" class="firstpage  pbtn"><img src="${pageContext.request.contextPath}/resources/img/btn_firstpage.png" alt="첫 페이지로 이동"></a>
				
		<c:if test="${pageVO.prev}">
			<a href="보낼 곳?pageNum=${pageVO.start-1}&amount=${pageVO.amount}" class="prevpage  pbtn"><img src="${pageContext.request.contextPath}/resources/img/btn_prevpage.png" alt="이전 페이지로 이동"></a>
		</c:if>
				
		<c:forEach var="num" begin="${pageVO.start}" end="${pageVO.end}">
				<a href="보낼 곳?pageNum=${num}&amount=${pageVO.amount}"><span class="pagenum ${pageVO.page == num ? 'currentpage' : ''}">${num}</span></a>
		</c:forEach>
				
		<c:if test="${pageVO.next}">
			<a href="보낼 곳?pageNum=${pageVO.end+1}&amount=${pageVO.amount}" class="nextpage  pbtn"><img src="${pageContext.request.contextPath}/resources/img/btn_nextpage.png" alt="다음 페이지로 이동"></a>
		</c:if>
		<a href="보낼 곳?pageNum=${pageVO.realEnd}&amount=${pageVO.amount}" class="lastpage  pbtn"><img src="${pageContext.request.contextPath}/resources/img/btn_lastpage.png" alt="마지막 페이지로 이동"></a>
	</div>
  ```
