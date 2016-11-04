/*
	 * linkedList.c
	 *
	 * This program takes in arguments with or without parameters that allow for the creation and 
	 * storage of a linked list with each element containing a name and that name's favorite number
	 * commands and parameters are all separated by a single space.
	 */

	#include <stdio.h>
	#include <string.h>
	#include <stdlib.h>

	int main(int argc, char *argv[]) {
		//STRUCT FOR PROGRAM
		struct person {
			char *name;
			int favInt;
			struct person *next;
		};
		//INITIALIZED VARIABLES USED IN PROGRAM
		struct person *head = NULL;
		struct person *current = NULL;
		int personCount = 0;
		int retval = 0;
		
		//MASSIVE LOOP FOR INPUT
		char inputStr[81];
		while (fgets(inputStr,81,stdin)) {
			if (inputStr[0] == '\n')
				continue;
			if (strchr(inputStr,'\n') == NULL) {
				fprintf(stderr, "ERROR:INPUT LINE TOO LONG\n");
				retval = 1;
			}
			//Reads in the line
			char cmdName[11];
			char cmdParam1[21];
			int  cmdParam2;
			int cmdScanRet = sscanf(inputStr, " %10s  %20s  %d", cmdName, cmdParam1, &cmdParam2);		
			if (cmdScanRet == 0) {
				fprintf(stderr, "ERROR: NO VALLID CMD FOUND\n");
				retval = 1;
			}
			
			if (strlen(cmdParam1) > 19) {
				fprintf(stderr,"ERROR STRING TOO LONG\n");
				retval = 1;
                        	cmdParam1[0] = ' ';
				continue;
			}

			//handles the print command
			if (strcmp(cmdName, "print") == 0) {
				printf("%d:", personCount);
				if (personCount > 0) {
					printf(" %s/%d", head->name, head->favInt);
					current = head;
					while (current->next != NULL) {
						printf(" %s/%d", current->next->name, current->next->favInt);
						current = current->next;
					}
				}
				printf("\n");			
			}

			//handles the print command
			else if (strcmp(cmdName, "insert") == 0) {
				if (cmdScanRet != 3) {
					fprintf(stderr,"ERROR: NOT ENOUGH PARAMETERS GIVEN TO INSERT CMD\n");
					retval = 1;
				}
				if (head == NULL) {
					struct person *temp = (struct person*)malloc(sizeof(struct person));
					if (temp == NULL) {
						fprintf(stderr,"ERROR: MEMORY FULL ON NODE BUILD\n");
						retval = 1;
					}
					temp->name   = strdup(cmdParam1);
					temp->favInt = cmdParam2;
					temp->next   = NULL;
					head = temp;
					personCount++;
				}
				else if (head->next == NULL) {
					if (strcmp(head->name, cmdParam1) == 0) {
						fprintf(stderr, "ERROR DUPLICATE\n");
						retval = 1;
					}
					else if (strcmp(head->name, cmdParam1) > 0) {
						struct person *temp = (struct person*)malloc(sizeof(struct person));
						temp->name = strdup(cmdParam1);
						temp->favInt = cmdParam2;
						temp->next = head;
						head = temp;
						personCount++;
					}
					else {
						struct person *temp = (struct person*)malloc(sizeof(struct person));
                                                temp->name = strdup(cmdParam1);
                                                temp->favInt = cmdParam2;
                                                temp->next = NULL;
                                                head->next = temp;
						personCount++;
					}
				}
				else {
					current = head->next;
					while (1) {
						if (strcmp(current->name, cmdParam1) >= 0 || current->next == NULL)
							break;
						else 
							current = current->next;
					}
					if (strcmp(current->name, cmdParam1) == 0) {
						fprintf(stderr,"ERROR DUPLICATE\n");
                                                retval = 1;
					}
					else {
				
					struct person *temp = (struct person*)malloc(sizeof(struct person));
					if (temp == NULL) {
						fprintf(stderr,"ERROR: MEMORY FULL ON NODE BUILD\n");
						retval = 1;
					}
					temp->name   = strdup(cmdParam1);
					temp->favInt = cmdParam2; 
					temp->next = current->next;
					current->next  = temp;
                    			personCount++;
					}
				}
		}

          	//handles the delete command
		else if (strcmp(cmdName, "delete") == 0) {
			if (cmdScanRet < 2) {
				fprintf(stderr,"ERROR: NO PARAMETER GIVEN TO DELETE CMD\n");
				retval = 1;
			}
			else if (head == NULL) {
				fprintf(stderr, "ERROR: STRING EMPTY\n");
				retval = 1;
			}
			else if (strcmp(head->name, cmdParam1) == 0) {
				head = head->next;
				personCount = personCount -1;
			}
			else {
               		while (strcmp(current->name, cmdParam1) != 0 && current->next != NULL) { 
                    		current = current->next;
               		}
      
       		        if (strcmp(current->name, cmdParam1) == 0) {
				        struct person *temp = (struct person*)malloc(sizeof(struct person));
                                	if (temp == NULL) {
                 	               		fprintf(stderr,"ERROR: MEMORY FULL ON NODE BUILD\n");
                                       		retval = 1;
                                	}
                                	temp->name   = current->next->name;
                                	temp->favInt = current->next->favInt;
                                	temp->next = current->next->next;
                			current = temp;
                   			personCount = personCount - 1;
			}
			else {
				fprintf(stderr,"ERROR: REQUESTED NODE TO DELETE NOT FOUND\n");
				retval = 1;	
			}
			}	
		}

          	//code to handle removeHead
		else if (strcmp(cmdName, "removeHead") == 0) {
			if (head == NULL) {
				fprintf(stderr,"ERROR: TRIED TO REMOVE HEAD BUT LIST EMPTY\n");
				retval = 1;
			}

               		head = head->next;
               		personCount = personCount - 1;
		}
	}
	return retval;
}
