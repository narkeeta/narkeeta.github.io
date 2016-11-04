
/*
 * phoneCalls.c
 *
 * This program takes in files names and two phone numbers and outputs the
 * number of times the phone numbers call eachother and if they share a 
 * third contact.
 *
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
struct contact {
	char *number;
	int callCount;
	struct contact *next;
};
struct number {
	char *number;
	struct contact *head;
	struct number *next;
};
struct node *head = NULL;
struct node *current = NULL;


void insertFirst(char *insert, char *insertInner) {
	struct number *temp = malloc(sizeof(struct number));
	//MAIN STRING FOR NODE
	strcpy(temp->number, insert);
	//INNER NODE
	struct contact *tempInner = malloc(sizeof(struct contact));
	strcpy(tempInner->number, insertInner);
	temp->head = tempInner;
	//NEXT NODE
	temp->next = head;
	head = temp;
}

struct node* find(char *toFind) {
   struct number* current = head;
   if(head == NULL) {
      return NULL;
   }

   while(strcmp(current->number, toFind) != 0) {
      if(current->next == NULL) {
         return NULL;
      } else {
         current = current->next;
      }
   }      
   return current;
}
int find(char *toFind) {
   struct number* current = head;
   if(head == NULL) {
      return 0;
   }
   //navigate through list
   while(strcmp(current->number, toFind) != 0) {
      if(current->next == NULL) {
         return 0;
      } else {
         current = current->next;
      }
   }     
   //if found return 1
   return 1;
}


int main(int argc, char *argv[]) {
        struct contact *innerCur = malloc(sizeof(struct contact));
        struct contact *temp = malloc(sizeof(struct contact));
        char firstNum[9];
        strcpy(firstNum, argv[argc-2]);
        char secondNum[9];
        strcpy(secondNum, argv[argc-1]);
        int retval = 0;

        //loop to read file input
        int i;
        for (i = 1; i < argc - 2; i++) {
                FILE *fp;
                fp = fopen(argv[i], "r"); // or whatever mode is appropriate 
                if (fp == NULL) {
                        fprintf(stderr, "ERROR: FILE OPEN ERROR");
                        retval = 1;
                }

                int status;
                char tempNum[9];
                char tempNumTwo[9];
                while((status = fscanf(fp, "%8s %8s", tempNum, tempNumTwo)) != EOF) {
                        if (status < 2) {
                                fprintf(stderr,"ERROR: INPUT ERROR");
                                retval = 1;
                        }
                        if (strlen(tempNum) != 8 || strlen(tempNumTwo) != 8 || strcmp(tempNum, tempNumTwo) == 0) {
								fprintf(stderr,"ERROR: FORMAT ERROR IN FILE");
                        }
						
						struct number *foundNumber = find(tempNum);
					
						if (find(tempNum) == NULL) {
								insertFirst(tempNum, tempNumTwo);
						}
						else {
								current = foundNumber;
								
						}

                }
			
                status = fclose(fp);
                if (status == EOF) {
                      fprintf(stderr, "ERROR: FILE CLOSE ERROR");
                      retval = 1;
                }
        }


        current = head;
        while (current->next != NULL) {
        printf("node: %s\n", current->number);
        current = current->next;
        }


        struct number *firstNumStruct;
        struct number *secondNumStruct;
        firstNumStruct = head;
        while (firstNumStruct->number != firstNum) {
                if (firstNumStruct->next == NULL) {
                        printf("0\nno");
                        return retval;
                }
                firstNumStruct = firstNumStruct->next;
        }
        while (secondNumStruct->number != firstNum) {
                if (secondNumStruct->next == NULL) {
                        printf("0\nno");
                        return retval;
                }
                secondNumStruct = secondNumStruct->next;
        }

        innerCur = firstNumStruct->head;
        while (strcmp(innerCur->number, secondNum) != 0) {
                if (innerCur->next == NULL) {
                        printf("0\n");
                        break;
                }
                else {
                        innerCur = innerCur->next;
                }
        }
        if (strcmp(innerCur->number, secondNum) == 0)
                printf("%d\n", innerCur->callCount);

        innerCur = firstNumStruct->head;
        while(1) {
                if (strcmp(innerCur->number, secondNum) == 0) {
                        if (innerCur->next == NULL) {
                                printf("no");
                                break;
                        }
                        innerCur = innerCur->next;
                        continue;
                }
                temp = secondNumStruct->head;
                while (temp->next != NULL && strcmp(temp->number, innerCur->number) != 0)
                        temp = temp->next;
                if (strcmp(temp->number, innerCur->number) == 0) {
                        printf("yes");
                        break;
                }
                else {
                        if (innerCur->next == NULL) {
                                printf("no");
                                break;
                        }
                        else innerCur = innerCur->next;
                }
        }

        return retval;
}
~                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
~                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
~                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
~                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                