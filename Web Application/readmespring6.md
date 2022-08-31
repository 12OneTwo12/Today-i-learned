# Spring   
  
  #### [ 2022-08-31 ]  
  
  ## 목차  
  * #### [[ 페이징 ]](#페이징)  
  * #### [[ Criteria ]](#criteria)  
  * #### [[ PageVO ]](#pagevo)  
  * #### [[ Searching ]](#searching)  
      
---------------------------------------------------------------------------------------------------------------------------------------------------
  
* ### 페이징  

  웹사이트의 게시판 페이지를 만드는 작업을 알아보자.  
    
  - 반드시 GET 방식으로만 처리한다  
    
  - 이동할 때 페이지 번호를가지고 다닌다  
    
  - 페이징 처리하는 로직을 ```Criteria```, ```PageVO```클래스로 분류한다  

* ### Criteria  

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
    
* ### PageVO  

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
    
  **jsp**
  ```jsp
  <!-- pagination -->
	<div class="pagination">
		<a href="맵핑 주소?pageNum=1&amount=${pageVO.amount}" class="firstpage  pbtn"><img src="${pageContext.request.contextPath}/resources/img/btn_firstpage.png" alt="첫 페이지로 이동"></a>
				
		<c:if test="${pageVO.prev}">
			<a href="맵핑 주소?pageNum=${pageVO.start-1}&amount=${pageVO.amount}" class="prevpage  pbtn"><img src="${pageContext.request.contextPath}/resources/img/btn_prevpage.png" alt="이전 페이지로 이동"></a>
		</c:if>
				
		<c:forEach var="num" begin="${pageVO.start}" end="${pageVO.end}">
				<a href="맵핑 주소?pageNum=${num}&amount=${pageVO.amount}"><span class="pagenum ${pageVO.page == num ? 'currentpage' : ''}">${num}</span></a>
		</c:forEach>
				
		<c:if test="${pageVO.next}">
			<a href="맵핑 주소?pageNum=${pageVO.end+1}&amount=${pageVO.amount}" class="nextpage  pbtn"><img src="${pageContext.request.contextPath}/resources/img/btn_nextpage.png" alt="다음 페이지로 이동"></a>
		</c:if>
		<a href="맵핑 주소?pageNum=${pageVO.realEnd}&amount=${pageVO.amount}" class="lastpage  pbtn"><img src="${pageContext.request.contextPath}/resources/img/btn_lastpage.png" alt="마지막 페이지로 이동"></a>
	</div>
  ```
  
  **controller**
  ```java
  @RequestMapping("/맵핑 주소")
  public String notice_list(Criteria cri, Model model) {
		
	List<TripVO> list = tripService.getList(cri);
	PageVO pageVO = new PageVO(cri, tripService.getTotal(cri)); // getTotal은 전체 데이터 갯수 조회
		
	model.addAttribute("list", list);
	model.addAttribute("pageVO", pageVO);
		
	return "trip/notice_list";
  }
  ```
  
* ### Searching  

  웹사이트의 검색기능을 구현해보자.  
    
  **jsp**
  ```jsp
  <!-- 
  검색에대한 처리
  1. form태그를 이용해서 검색 키워드와 검색 값을 notice_list에 전달
  2. criteria클래스에서 검색키워드, 검색값, page, amount 값을 받는다.
  3. 동적쿼리를 이용해서 sql문 변경
  4. 페이지번호를 클릭해도 검색 키워드, 검색 값을 전달
  5. 검색키워드의 값 유지
  6. 데이터 개수가 변경될때도 form을 이용해 전송하도록 변경
  -->
			
  <form action="notice_list" name="actionForm" class="minisrch_form">
				
	<fieldset>
		<select id="handleAmmount" style="height: 35px; font-size: 12px; text-align: center; ">
			<option value="10" ${pageVO.amount == 10 ? 'selected' : ''}>10개씩 보기</option>
			<option value="20" ${pageVO.amount == 20 ? 'selected' : ''}>20개씩 보기</option>
			<option value="50" ${pageVO.amount == 50 ? 'selected' : ''}>50개씩 보기</option>
			<option value="100" ${pageVO.amount == 100 ? 'selected' : ''}>100개씩 보기</option>
		</select>
		<select name="searchType" style="height: 35px;">
			<option value="title" ${pageVO.cri.searchType == 'title' ? 'selected' : ''}>제목</option>
			<option value="content" ${pageVO.cri.searchType == 'content' ? 'selected' : ''}>내용</option>
			<option value="writer" ${pageVO.cri.searchType == 'writer' ? 'selected' : ''}>작성자</option>
			<option value="titcont" ${pageVO.cri.searchType == 'titcont' ? 'selected' : ''}>제목+내용</option>
		</select>
		<legend>검색</legend>
		<input type="text" name="searchKey" value="${pageVO.cri.searchKey}" class="tbox" title="검색어를 입력해주세요" placeholder="검색어를 입력해주세요">
		<input type="submit" class="btn_srch" value="검색">
		
		<input type="hidden" name="pageNum" value="1">
		<input type="hidden" name="amount" value="${pageVO.amount}">
		
		<!-- <a href="javascript:;" class="btn_srch">검색</a> -->
	</fieldset>
  </form>
  
  <script>	
	var handleAmmount = document.getElementById("handleAmmount");
	handleAmmount.onchange = function(){
		// 이벤트에서 this는 태그 자신을 의미
		document.actionForm.amount.value = this.value;
		document.actionFrom.submit();
	}
  </script>
  ```
    
  그 후 ```Criteria``` 클래스에 검색할 내용(searchKey)과 어느 부분에서 검색할 것인지(searchType)에 대한 값을 받을 수 있게 멤버 변수를 만들어준다.  
  
  **Criteria.java**
  ```java
  @Data
  public class Criteria {

	private int pageNum;
	private int amount;
	
	// 검색 키워드
	private String searchType;
	private String searchKey;
	
	public Criteria() {
		this.pageNum = 1;
		this.amount = 10;
	}
	
	public Criteria(int pageNum, int amount) {
		this.pageNum = pageNum;
		this.amount = amount;
	}
	
	public int getPageStart() {
		return (pageNum-1) * amount;
	}
	
  }
  ```
    
  그리고 이를 조건문을 통해 작성한 동적 쿼리문으로 검색한 값을 가지고 올 수 있도록 만든다.  
  이때 MySQL 명령문인 ```LIKE```와 ```%```를 통해 ```searchKey```값이 포함된 값을 가져오게 만든다.  
  ```%```는 값 앞에 적히면 ```searchKey```값 앞에 어떤 값이 있건 데이터에 ```searchKey```가 포함돼 있다면 참 이라는 의미이고,  
  뒤에 적히면 ```searchKey```값 뒤에 어떤 값이 있건 데이터에 ```searchKey```가 포함돼 있다면 참이 된다는 의미이다.    
    
  **MyBatis**
  ```xml
  <!-- 검색 결과를 가져오는 메소드 -->
  <select id="getList" resultType="TripVO">
  	SELECT * FROM trip  
		
		<if test="searchType == 'title' ">where title like concat('%',#{searchKey},'%')</if> 		
		<if test="searchType == 'content' ">where content like concat('%',#{searchKey},'%')</if> 		
		<if test="searchType == 'writer' ">where writer like concat('%',#{searchKey},'%')</if> 		
		<if test="searchType == 'titcont'">where title like concat('%',#{searchKey},'%') or content like concat('%',#{searchKey},'%')</if>
		<if test="searchType == null or searchType == ''">where 1=1</if>
  			
  	ORDER BY tno DESC LIMIT #{pageStart}, #{amount}
  </select>

  <!-- 검색 결과의 총 갯수를 가져오는 메소드 -->
  <select id="getTotal" resultType="int">
  	SELECT count(*) AS total FROM trip
  		
  		<if test="searchType == 'title' ">where title like concat('%',#{searchKey},'%')</if> 		
		<if test="searchType == 'content' ">where content like concat('%',#{searchKey},'%')</if> 		
		<if test="searchType == 'writer' ">where writer like concat('%',#{searchKey},'%')</if> 		
		<if test="searchType == 'titcont'">where title like concat('%',#{searchKey},'%') or content like concat('%',#{searchKey},'%')</if>
		<if test="searchType == null or searchType == ''">where 1=1</if>
  		
  </select>
  ```
    
  이러면 이제 검색 결과는 잘 나오지만 페이지를 이동하게 되면 검색값이 사라져 버린다.  
  왜냐면 get방식으로 페이지를 이동하게 세팅해놨는데 이동할 주소값에는 검색 결과가 담기지 않았기 때문이다.  
  이를 보완한다.  
    
  **jsp**
  ```jsp
  <!-- pagination -->
  <div class="pagination">
	<a href="notice_list?searchType=${pageVO.cri.searchType}&searchKey=${pageVO.cri.searchKey}&pageNum=1&amount=${pageVO.amount}" class="firstpage  pbtn"><img src="${pageContext.request.contextPath}/resources/img/btn_firstpage.png" alt="첫 페이지로 이동"></a>
				
	<c:if test="${pageVO.prev}">
		<a href="notice_list?searchType=${pageVO.cri.searchType}&searchKey=${pageVO.cri.searchKey}&pageNum=${pageVO.start-1}&amount=${pageVO.amount}" class="prevpage  pbtn"><img src="${pageContext.request.contextPath}/resources/img/btn_prevpage.png" alt="이전 페이지로 이동"></a>
	</c:if>
				
	<c:forEach var="num" begin="${pageVO.start}" end="${pageVO.end}">
			<a href="notice_list?searchType=${pageVO.cri.searchType}&searchKey=${pageVO.cri.searchKey}&pageNum=${num}&amount=${pageVO.amount}"><span class="pagenum ${pageVO.page == num ? 'currentpage' : ''}">${num}</span></a>
	</c:forEach>
				
	<c:if test="${pageVO.next}">
		<a href="notice_list?searchType=${pageVO.cri.searchType}&searchKey=${pageVO.cri.searchKey}&pageNum=${pageVO.end+1}&amount=${pageVO.amount}" class="nextpage  pbtn"><img src="${pageContext.request.contextPath}/resources/img/btn_nextpage.png" alt="다음 페이지로 이동"></a>
	</c:if>
  	<a href="notice_list?searchType=${pageVO.cri.searchType}&searchKey=${pageVO.cri.searchKey}&pageNum=${pageVO.realEnd}&amount=${pageVO.amount}" class="lastpage  pbtn"><img src="${pageContext.request.contextPath}/resources/img/btn_lastpage.png" alt="마지막 페이지로 이동"></a>
  </div>
  <!-- //pagination -->
  ```
