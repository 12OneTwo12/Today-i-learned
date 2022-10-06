# Python     
  
  #### [ 2022-10-06 ]   
   
  ## 목차  
  * #### [[ 외부 데이터 처리 ]](#외부-데이터-처리)  
  * #### [[ 태그 접근 방법 ]](#태그-접근-방법)  
      
------------------------------------------------------------------------------------------------------------------------------------------------------
  
* ### 외부 데이터 처리  

  - 공공데이터나 오픈된 데이터를 파일로 다운 받아서 사용(csv, 엑셀, xml, json...)  

  - 웹 페이지를 읽어서 데이터 분석(그 웹 페이지 구조를 분석해야함)  

  ```python
  !pip install requests
  import requests
  #requests.get(url):get방식 요청
  #requests.post(url):post방식 요청

  html = requests.get('https://google.com').text  #웹 요청
  html
  ```
  
  ```python
  !pip install beautifulsoup4
  from bs4 import BeautifulSoup
  
  content = BeautifulSoup(html, 'html.parser')  #html소스를 돔 객체화 
  title = content.html.head.title    #소스에서 title 태그 추출
  print(title.string)  #string:태그의 텍스트 값 <태그>텍스트</태그>
  # 결과 Google
  ```
  
* ### 태그 접근 방법  

  - ```root.html.body.h1``` : 태그 한개 검색  
  - ```root.find(태그[속성])``` : 태그 1개 검색. 검색이 여러개 되도 처음것 하나만 반환  
  - ```root.find_all(태그[속성])``` : 태그 모두 검색  
  - ```root.select(태그)``` : 태그 모두 검색  
  
  ```python
  #link = content.html.body.a  #처음 a 태그 하나만 추출
  links = content.find_all('a')
  
  for i in links:
    print(i.get_text(), ':', i['href'])#속성값 읽기
  ```
  ```python
  html = '<html>'
  html += '<body>'
  html += '<p class=a>aaa</p>'
  html += '<p class=b>bbb</p>'
  html += '<p class=a>ccc</p>'
  html += '<p class=a id=xxx>ddd</p>'
  html += '</body>'
  html += '</html>'

  root = BeautifulSoup(html, 'html.parser') 
  p1 = root.find_all('p')
  print('p1:', p1)
  p2 = root.find_all('p', {'class':'a'})
  print('p2:', p2)
  p3 = root.find_all('p', {'class':'b'})
  print('p3:', p3)
  p4 = root.find('p', {'class':'a', 'id':'xxx'})
  print('p4:', p4)
  p5 = root.select('p')
  print('p5:', p5)
  p6 = root.select('p.a')#태그.클래스명 //태그#id명
  print('p6:', p6)
  p7 = root.select('p.b')
  print('p7:', p7)
  p8 = root.select('p#xxx')
  print('p8:', p8)
  ```
  
  ```python
  url = 'https://ent.sbs.co.kr/news/flash.do?plink=GNB&cooper=SBSENTERNEWS'
  html = requests.get(url).text  
  root = BeautifulSoup(html, 'html.parser') 
  divs = root.select('div.w_nwl_text')#기사 div 태그들만 추출
  
  for i in divs:
    title = i.find('h3').text
    print('title:', title)
    #select는 여러개검색하는 함수이므로 반환타입이 []리스트다
    text = i.select('div.nwl_text')[0].text  
    print('text:', text)
    writer = i.select('em.nwl_reporter')[0].text
    print('writer:', writer)
    time = i.select('div.nwl_subtext')[0].text
    print('time:', time)
    print('====================')
  ```
  
* ### 웹 요청  

  ```python
  html = requests.get('http://www.kma.go.kr/weather/forecast/mid-term-rss3.jsp').text  #웹 요청
  #html=html.decode('utf-8')
  #지역별 일간 날씨를 출력
  root = BeautifulSoup(html, 'html.parser') 
  loc = root.find_all('location')
  for i in loc:  # i:<location>
      print(i.city.get_text(), '지역 날씨========')
      d = i.find_all('data')
      for j in d: # j:<data>
          print(j.tmef.string , ':', j.wf.string, ' / 최저온도:', j.tmn.string, ' / 최고온도:', j.tmx.string, ' / 습도:',j.rnst.string,'%')
  ```
  **결과**
  ```
  서울 지역 날씨========
  2022-10-09 00:00 : 흐림  / 최저온도: 12  / 최고온도: 18  / 습도: 40 %
  2022-10-09 12:00 : 흐리고 비  / 최저온도: 12  / 최고온도: 18  / 습도: 100 %
  2022-10-10 00:00 : 구름많고 비  / 최저온도: 11  / 최고온도: 16  / 습도: 100 %
  2022-10-10 12:00 : 구름많고 비  / 최저온도: 11  / 최고온도: 16  / 습도: 90 %
  2022-10-11 00:00 : 맑음  / 최저온도: 9  / 최고온도: 19  / 습도: 10 %
  2022-10-11 12:00 : 맑음  / 최저온도: 9  / 최고온도: 19  / 습도: 0 %
  2022-10-12 00:00 : 맑음  / 최저온도: 9  / 최고온도: 21  / 습도: 0 %
  2022-10-12 12:00 : 맑음  / 최저온도: 9  / 최고온도: 21  / 습도: 0 %
  2022-10-13 00:00 : 구름많음  / 최저온도: 11  / 최고온도: 21  / 습도: 20 %
  2022-10-13 12:00 : 구름많음  / 최저온도: 11  / 최고온도: 21  / 습도: 30 %
  2022-10-14 00:00 : 구름많음  / 최저온도: 13  / 최고온도: 21  / 습도: 30 %
  2022-10-15 00:00 : 맑음  / 최저온도: 11  / 최고온도: 20  / 습도: 0 %
  2022-10-16 00:00 : 맑음  / 최저온도: 10  / 최고온도: 20  / 습도: 0 %
  인천 지역 날씨========
  2022-10-09 00:00 : 흐림  / 최저온도: 13  / 최고온도: 18  / 습도: 40 %
  2022-10-09 12:00 : 흐리고 비  / 최저온도: 13  / 최고온도: 18  / 습도: 100 %
  ...
  ```
  
  **다음 검색**
  ```python
  url = "https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&sq=&o=&q=%EC%8B%A4%EC%8B%9C%EA%B0%84%EC%98%81%ED%99%94%EC%98%88%EB%A7%A4%EC%9C%A8"
  html = requests.get(url).text
  #morColl > div.coll_cont > div > ol
  root = BeautifulSoup(html, 'html.parser') 
  ol = root.select('#morColl > div.coll_cont > div > ol')[0]
  lis = ol.select("li")
  for i in range(5):
      li = lis[i]
      href = li.select("div.wrap_thumb > a > img")[0]["src"]
      title = li.select("div.wrap_cont.cont_type2 > div > a")[0].text
      score = li.select("div.wrap_cont.cont_type2 > dl.dl_comm.star_comp_s > dd.score > em")[0].text
      rate = li.select("div.wrap_cont.cont_type2 > dl:nth-child(3) > dd")[0].text
      opendt = li.select("div.wrap_cont.cont_type2 > dl:nth-child(4) > dd")[0].text
      acc_au = li.select("div.wrap_cont.cont_type2 > dl:nth-child(5) > dd")[0].text
      print("href : ",href)
      print("title : ",title)
      print("score : ",score)
      print("rate : ",rate)
      print("opendt : ",opendt)
      print("opendt : ",acc_au)
  ```
  
  **결과**
  ```
  href :  https://search1.kakaocdn.net/thumb/R232x328.q85/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fcfe6a6b2431cb364e2330f417c3866e2fad97b18
  title :  인생은 아름다워
  score :  8.9
  rate :  13.7%
  opendt :   2022.09.28. 
  opendt :  388,072명
  href :  https://search1.kakaocdn.net/thumb/R232x328.q85/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fec835362c051a621cda0411af5a61a20464a161b
  title :  정직한 후보2
  score :  3.3
  rate :  9.8%
  opendt :   2022.09.28. 
  opendt :  538,385명
  href :  https://search1.kakaocdn.net/thumb/R232x328.q85/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F36f22dea0e0a9e0e626c549ce689558160c46ed4
  title :  공조2: 인터내셔날
  score :  7.9
  rate :  9.5%
  ...
  ```
