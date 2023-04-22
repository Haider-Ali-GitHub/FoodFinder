import 

public class FoodFinder{
  public static void main(String[] args )
  {

    System.out.println("Welcome to FoodFinder, where we help you decide what to eat at Rutgers!"); 
    System.out.println("Lets Start! Do you want to stay on campus or go off campus?");
    System.out.println(" 1: On Campus");
    System.out.println(" 2: Off Campus");
  

    int OnorOffCampus =  StdIn.readInt();

        if( OnorOffCampus == 1 )
        {
            System.out.println(" ");
            System.out.println("What Campus are you on: ");
            System.out.println(" 1: Busch");
            System.out.println(" 2: Cook/Douglass");
            System.out.println(" 3: College Ave");
            System.out.println(" 4: Livingston");

            int Campus =  StdIn.readInt();

            if(Campus == 1) 
            { System.out.println(" ");
              System.out.println("You are on Busch");
              System.out.println("Do you want to eat cheap or do you want to ball?");
              System.out.println("1: Cheap");
              System.out.println("2: Ball");

              int budget = StdIn.readInt(); 

              if( budget == 1)
              { System.out.println(" ");
                System.out.println("Where are you located closest to?");
                System.out.println("1: Busch Student Center");
                System.out.println("2: The Cave");
                System.out.println("3: ARC");

                int location = StdIn.readInt(); 

                if(location == 1) {
                    System.out.println(" ");
                    System.out.println("Panera Bread");
                    System.out.println(" ");
                    System.out.println("Pizza");
                }
                else if( location == 2){

                }
                else if( location == 3){

                }
              }

              else if( budget ==x 2)
              {

              System.out.println("Where are you located closest to??");
              System.out.println("1: Busch Student Center");
              System.out.println("2: The Cave");
              System.out.println("3: ARC");

              }
            }
            else if(Campus == 2){ System.out.println("You are on Cook/Douglass"); }
            else if(Campus == 3){ System.out.println("You are on College Ave"); }
            else if(Campus == 4){ System.out.println("You are on Livingston"); }


        }
        else if( OnorOffCampus == 2 )
        {

        }
        else{ 
            System.out.println("No Value was Entered");
        }
    }
}