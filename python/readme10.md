# Python     
  
  #### [ 2022-10-05 ]   
   
  ## 목차  
  * #### [[ matplotlib ]](#matplotlib)  
  * #### [[ 기본 그래프 ]](#기본-그래프)  
  * #### [[ 막대 그래프 ]](#막대-그래프)  
  * #### [[ 산점도 그래프 ]](#산점도-그래프)  
  * #### [[ 히스토그램 ]](#히스토그램)  
  * #### [[ 파이 그래프 ]](#파이-그래프)  
  * #### [[ pandas로 그래프 그리기 ]](#pandas로-그래프-그리기)  
      
------------------------------------------------------------------------------------------------------------------------------------------------------
  
* ### matplotlib    
   
  - 데이터 시각화 라이브러리    
  - 다양한 데이터를 많은 방법으로 도식화 할 수 있도록 하는 파이썬 라이브러리  
  
  ```python
  !pip install matplotlib
  import matplotlib.pyplot as plt
  import numpy as np
  import pandas as pd
  ```
  
* ### 기본 그래프  

  ```python
  x = [1,2,3,4]
  y = [3,8,5,6]
  plt.plot(x, y) # x좌표, y좌표 설정
  plt.show() # 출력
  ```
  
  ```python
  plt.plot(x, y, 'r--')#r:빨강, b:파랑, ... --:점선
  plt.grid(True) # 바닥 바둑무늬 출력
  plt.title('graph test') # 그래프 제목
  plt.xlabel('x_label') # x축 레이블
  plt.ylabel('y_label') # y축 레이블
  plt.show()
  ```
    
  **포물선**
  ```python
  x = np.arange(-4.5, 5, 0.5)
  y = 2*x**2
  plt.plot(x, y)
  plt.show()
  ```
  
  **줄 중첩**
  ```python
  x = np.arange(-4.5, 5, 0.5)
  y1 = 2*x**2
  y2 = 5*x+30
  y3 = 4*x**2+10
  plt.plot(x, y1)
  plt.plot(x, y2)
  plt.plot(x, y3)
  #plt.plot(x, y1, x, y2, x, y3)
  plt.show()
  ```
  
  ```python
  x = np.arange(-4.5, 5, 0.5)
  y1 = 2*x**2
  y2 = 5*x+30
  plt.plot(x, y1)
  plt.figure()  #새 칸을 만들어줌
  plt.plot(x, y2)
  plt.show()
  ```

  ```python
  x = np.arange(-4.5, 5, 0.5)
  y1 = 2*x**2
  y2 = 5*x+30
  y3 = 4*x**2+10
  plt.figure(1)# 1번 박스
  plt.plot(x, y1)
  plt.figure(2)# 2번 박스
  plt.plot(x, y3)
  plt.figure(1)# 1번 박스
  plt.plot(x, y2)
  plt.show()
  ```
  
  ```python
  x = np.arange(-4.5, 5, 0.5)
  y1 = 2*x**2
  y2 = 5*x+30
  y3 = 4*x**2+10
  y4 = np.sin(x)**2
  plt.subplot(2,2,1)#subplot(행,렬,순번)
  plt.plot(x, y1)

  plt.subplot(2,2,2)
  plt.plot(x, y2)

  plt.subplot(2,2,3)
  plt.plot(x, y3)

  plt.subplot(2,2,4)
  plt.plot(x, y4)

  plt.show()
  ```
  
* ### 막대 그래프  

  ```python
  #막대 그래프
  idx = np.arange(3) #리스트 인덱스
  x = ['2018', '2019', '2020']
  y = [100, 700, 400]

  plt.bar(idx, y) #y에 해당하는 막대 그래프 표현
  plt.xticks(idx, x)
  plt.show()
  ```
  
* ### 산점도 그래프  

  ```python
  #산점도 그래프
  city=['seoul', 'inchun', 'daejun', 'daegu', 'woolsan', 'busan', 'gwangju']

  lat=[37.56, 37.45, 36.35, 35.87, 35.53, 35.18, 35.16]
  lon=[126.97, 126.70, 127.38, 128.60, 129.31, 129.07, 126.85]

  pop_den=[16154, 2751, 2839, 2790, 1099, 4454, 2995]
  size = np.array(pop_den)*0.2
  colors = ['r', 'g', 'b', 'c', 'm', 'k', 'y']

  plt.scatter(lon, lat, s=size, c=colors, alpha=0.5)
  plt.xlabel('lon') # 경도
  plt.ylabel('lat') # 위도
  plt.title('pop den')
  for x, y, name in zip(lon, lat, city):
      plt.text(x, y, name)#텍스트 출력

  plt.show()
  ```
  
* ### 히스토그램  

  데이터의 분포를 막대기 길이로 표현  
    
  ```python
  x=[43,67,87,76,54,34,56,76,89,98,100,87,65,43,23] #점수
  #plt.hist(x, bins)
  plt.hist(x, bins=7)  #bins는 분포를 표현할 값의 계층 수 
  plt.show()
  ```
    
* ### 파이 그래프  

  데이터 분포도를 부채꼴로 표현  
     
  ```python
  ex=(0.1,0.1,0,0,0)#각 부채꼴 떨어뜨릴 거리. 0인 요소는 붙어서 출력됨
  fruit = ['apple', 'banana', 'strawberry', 'orange', 'grape']
  result = [7,6,3,2,2]
  plt.pie(result, labels=fruit, autopct='%.1f%%', counterclock=False, 
          startangle=90, explode=ex)
  plt.show()
  ```
    
* ### pandas로 그래프 그리기  

  ```python
  import pandas as pd
  s1=pd.Series([1,2,3,4,5,6,7,8,9,10])
  s1.plot()#X축은 인덱스, Y축은 값
  plt.show()
  
  arr = np.array([[1,2,3],[4,5,6]])
  idx = ['row1', 'row2']
  cols = ['col1', 'col2', 'col3']
  d1 = pd.DataFrame(arr, index=idx, columns=cols)
  d1.plot()
  plt.show()
  ```
  
