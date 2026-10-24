#include <stdbool.h>
#include <stdio.h>

int task3(int* nums, int n) {
    int c = 1;
    bool b = false;

    while (b == false) {
    for (int i = 0; i < n; i++) {
        if (nums[i] == c) {
                b = true;
                break;
       }
        }
    if (b == false) { 
     return c;
        }

      c++;
       b = false;
    }
        return c;
}