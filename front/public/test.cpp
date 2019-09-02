#include <iostream>
#include <sys/inotify.h>
using namespace std;

void countNumbers(char keyCode){
    std::string str = std::string("Lo ") + "que " + "quieras";
    for ( int i = 0; i < sizeof(str); i++ ){
        cout << str[i];
    }
}

int main(){
    int numbers[6];
    char letter = 'a';
    countNumbers(letter);
    return 0;
}
