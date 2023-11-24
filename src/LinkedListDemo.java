import java.util.*;

public class LinkedListDemo {
  public static void main(String[] args) {
    System.out.println("______adding elements into linked list and printing using a normal for loop______");
    LinkedList<String> obj=new LinkedList<String>();
    obj.add("Hello");
    obj.add("murali");
    obj.add("svnm");
    obj.add("svnmurali");
    for (int i=0;i<obj.size();i++){
    System.out.println(obj.get(i));
    }
    //subquestion2
    System.out.println("______removing elements at first and last and printing using advanced for loop______");
    obj.removeFirst();
    obj.removeLast();
    for(String j:obj){
    System.out.println(j);
    }
    System.out.println("_____adding elements first and last and printing using iterator_______");
    obj.addFirst("first name");
    obj.addLast("last name");
    Iterator iterator =obj.iterator();
    while (iterator.hasNext()){
    System.out.println(iterator.next());
    }
  }
}