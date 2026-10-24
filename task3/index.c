
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <math.h>


char* binaryString(char** nums, int n) {  

char *binStri = malloc((n + 1) * sizeof(char));  //i alocated a string called binStrin.
if (!binStri) return NULL;

int l,k;
bool b;

for(int i=0;i<pow(n,2)+1;i++){       //this 2 loops checks all possibilities of binary numbers in n digit.
 b=false;
  for(int j=0;j<n;j++){      //compare it with all binary strings of "nums".

  l= strtol(nums[j],NULL,2);               //this convert the bin string into dicimal int.

  // printf("i=%d,j=%d ,l:%d \n",i,j,l); 

   if(l==i){ 
   b=true;
   }
  }

if (b==false){        //if the bool remain flase after checking all the strings 
                      //means that this bin string (i) dont exist in "nums".

 for (int z=0; z<n;z++){   //this loop convert again from dicimal to binary string.
    int sh= (n - 1) - z;
    int bit =(i >> sh) & 1;
    binStri[z] =bit ? '1': '0';
   }
binStri[n]='\0';
return binStri;     //returnnn      
}
}
return "011";  //that won't be reached only for the code
}
