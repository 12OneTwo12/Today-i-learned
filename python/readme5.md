# Python     
  
  #### [ 2022-09-27 ]   
   
  ## 목차  
  * #### [[ 입출력 ]](#입출력)  
  * #### [[ 바이너리 읽고 쓰기 ]](#바이너리-읽고-쓰기)  
  * #### [[ 위치 제어 ]](#위치-제어)  
  * #### [[ 파일제어함수들 ]](#파일제어함수들)  
  * #### [[ 디렉토리 제어 ]](#디렉토리-제어)  
      
------------------------------------------------------------------------------------------------------------------------------------------------------
  
* ### 입출력  

  스트림: 단방향.   
  입력스트림:밖에서 프로그램쪽으로 데이터 흐름 구현  
  출력스트림: 프로그램에서 밖으로의 데이터 흐름 구현  
    
  * #### 표준 스트림  

    sys: 표준 시스템 객체나 함수가 정의. 표준입력, 표준출력, 표준에러 정의  
      
    표준입력: ```sys.stdin```  
    표준출력: ```sys.stdout```  
    표준에러: ```sys.stderr```
      
  * #### 스트림의 읽기/쓰기 함수  

    - 입력 스트림의 읽기 함수  
      
      ```read(size)```: size만픔 읽음  
      ```read()```: 전체내용 읽음  
      ```readLine()```: 한 줄 읽음  
      
    - 출력 스트림의 쓰기 함수  

      ```write(str)```: str을 씀    
  
      ```writelines()```: 리스트나 튜플에 담긴 여러 줄은 한번에 출력  
      
  * #### 파일입출력  

    - 파일 오픈: open("파일경로", "모드")  
        
          모드: "r" - 읽기  / "w" - 쓰기 / "a" - 이어쓰기  
    
    - 파일 닫기: close()  

  * #### 읽기 예제  

    ```python
    def main():
        f = open("a.txt", "r", encoding="utf-8")
        str1 = f.read()
        print(str1)
        f.close()

    main()
    ```
      
    ```python
    def main2():
        f = open("a.txt", "r")
        while True:
            str1 = f.read(3)
            if str1=='':
                break
            print(str1)
        f.close()

    main2() 
    ```
      
    ```python
    def main3():
        f = open("a.txt", "r")
        while True:
            str1 = f.readline()
            if str1=='':
                break
            print(str1)
        f.close()

    main3() 
    ```
      
    ```python
    def main4():
        with open("a.txt", "r") as f:
            str1 = f.read()
            print(str1)

    main4() 
    ```
      
  * #### 파일 쓰기 예제  

    ```python
    def main():
        f = open("c.txt", "w")
        str1 = input('파일에 작성할 내용을 입력하라')
        f.write(str1)
        f.close()

    main()
    ```
      
    ```python
    #파일복사

    def main():
        f_name1=input('원본 파일명:')
        name = f_name1.split('.')
        f_name2 = name[0]+'_복사본.'+name[1]
        f1 = open(f_name1, 'r', encoding='utf-8')
        f2 = open(f_name2, 'w')
        str1 = f1.read()
        f2.write(str1)
        f1.close()
        f2.close()

    main()
    ```
      
    ```python
    def main2():
        f=open('b.txt', 'w')
        while True:
            str1 = input('str(끝내려면 /exit입력):')
            if str1 == '/exit':
                break
            f.write(str1+'\n')
        f.close()

    main2()
    ```
      
* ### 바이너리 읽고 쓰기  

  ```
  모드: "rb" - 읽기  / "wb" - 쓰기 / "ab" - 이어쓰기
  ```
    
  ```python
  def main():
      f = open('picachu.png', 'rb')#바이너리 읽기 모드로 오픈
      b_data = f.read()
      print('바이너리 데이터')
      print(b_data)
      f.close()

      f = open('picachu_cp.png', 'wb')#바이너리 쓰기 모드로 오픈
      f.write(b_data)
      f.close()

  main()
  ```
    
* #### 위치 제어  
  
  ```
  tell() - 현재 읽고 쓸 위치 반환
  seek(off, whence): 읽고 쓸 위치 whence를 기준으로 off만큼 떨어진 위치로 이동
                          whence:0=>맨앞을 기준 / whence:1=>현재 위치를 기준 / whence:2=>맨뒤를 기준 
  ```
    
  ```python
  def main2(): 
      f = open('b.txt', 'w') 
      str1 = 'abcdefghijklmnopqrstuvwxyz' 
      f.write(str1) 
      f.close() 

      f = open('b.txt', 'rb')#위치 제어하려면 바이너리 모드로 오픈해야 함 
      print(f.read(3)) 
      print('현재 위치:', f.tell()) 

      f.seek(5) 
      print('현재 위치:', f.tell()) 
      print('맨 앞에서 5위치의 문자:',f.read(1)) 

      f.seek(10, 0) 
      print('현재 위치:', f.tell()) 
      print('맨 앞에서 10위치의 문자:',f.read(1)) 

      f.seek(3, 1) 
      print('현재 위치:', f.tell()) 
      print('현재 위치에서 3위치의 문자:',f.read(1)) 

      f.seek(-3, 1) 
      print('현재 위치:', f.tell()) 
      print('현재 위치에서 -3위치의 문자:',f.read(1)) 

      f.seek(-3, 2) 
      print('현재 위치:', f.tell()) 
      print('맨 뒤에서 -3위치의 문자:',f.read(1)) 

      f.close()

  main2()
  ```
    
* ### 파일제어함수들  

  - ```truncate(size)``` - size 크기로 파일 절삭    
      
  - ```rename(old, new)``` - 파일명을 old에서 new로 변경    
      
  - ```remove(파일명)``` - 파일삭제  
  
  ```python
  def main():
      str1 = "abcdefghijklmnopqrstuvxyz"
      f = open("f.txt", "w")
      f.write(str1)
      f.truncate(10)
      f.close()

      f = open("f.txt", "r")   
      print(f.read())
      f.close()

  main()
  ```
    
  ```python
  import os

  def main():
      old_name = input("이름을 수정할 파일명을 입력하시오:  ")
      new_name = input("새 파일명을 입력하시오:  ")

      os.rename(old_name, new_name)

      f = open(new_name, "r")
      print(f.read())
      f.close()

  main()
  ```
    
  ```python
  import os

  def main():
      f = open("rem.txt", "w+")#w+:읽고 쓰기 모드. 파일이 없으면 새로 생성해서 오픈
      f.write("hello Python")
      f.seek(0)
      print(f.read())
      f.close()

      os.remove("rem.txt")

      f = open("rem.txt", "r")#파일이 없기 때문에 여기서 에러 발생
      print(f.read())
      f.close()

  main()
  ```
    
* ### 디렉토리 제어  
  
  ```
  import os
  os.getcwd() - 현재 작업 디렉토리 명 반환
  os.chdir(path) - 작업 디렉토리는 path로 변경
  os.mkdir(path) - 디렉토리 생성
  os.rmdir(path) - 디렉토리 삭제
  os.listdir(path) - 디렉토리 파일 목록 리스트로 반환
  os.path.isfile(path) - path의 파일이 존재하면 True, 아니면 False
  os.path.isdir(path) - path의 디렉토리가 존재하면 True, 아니면 False
  ```
    
  **간단한 메모장 프로그램**
  ```python
  import os

  location = os.getcwd() + '\memo'

  def 작성(f):
      print("파일 작성이 시작됩니다. 그만 멈추고 싶으시면 ./stop을 입력해주세요")
      while True:
          stop_or_no = input(': ')
          if stop_or_no == './stop':
              break
          f.write(stop_or_no+"\n")
      f.close()

  def 메모_읽기():
      list = os.listdir(location)
      for i in list:
          print(list.index(i)+1,".",i)
      sele = int(input('읽을 메모를 번호를 입력해주세요 : '))
      if os.path.isfile(location+'\\'+list[sele-1]):
          f = open(location+'\\'+list[sele-1],'r')
          str1 = f.read()
          print(str1)
      else:
          print("없는 파일 번호입니다")
          main()

  def 이어쓰기(inpp):
      f = open(location+'\\'+inpp+".txt",'a')
      작성(f)


  def 덮어쓰기(inpp):
      f = open(location + '\\' + inpp + ".txt", 'w')
      작성(f)

  def 쓰기():
      inpp = input("파일 명을 입력해주세요 : ")
      if os.path.isfile(location+"\\"+inpp+".txt"):
          print("파일이 이미 존재합니다")
          print("1. 이어쓰기  2. 덮어쓰기  3. 새 파일명 입력  4. 종료 ")
          inppp = input("메뉴를 입력해주세요 : ")
          if inppp == '1':
              이어쓰기(inpp)
          elif inppp == '2':
              덮어쓰기(inpp)
          elif inppp == '3':
              쓰기()
          else:
              main()
      else:
          print("파일이 새로 생성 됐습니다.")
          f = open(location+"\\"+inpp+".txt", "w+")  # w+:읽고 쓰기 모드. 파일이 없으면 새로 생성해서 오픈
          작성(f)


  def 파일삭제():
      inpp = input("파일 명을 입력해주세요 : ")
      if os.path.isfile(location + "\\" + inpp + ".txt"):
          os.remove(location + "\\" + inpp + ".txt")
      else:
          print("정확한 파일 명을 입력해주세요")
          main()


  def main():
      while True:

          if os.path.isdir(location):
              pass
          else:
              os.mkdir(location)

          print('1. 메모 읽기  2. 쓰기  3. 파일 삭제  4. 종료')
          inp = input("번호를 입력해주세요 : ")
          if inp == '1':
              메모_읽기()
          elif inp == '2':
              쓰기()
          elif inp == '3':
              파일삭제()
          else:
              break

  main()
  ```
    
