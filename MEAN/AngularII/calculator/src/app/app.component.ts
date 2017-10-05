import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num: any = '0';
  operatorPOS;

  one() {
      if (this.num == '0') {
          this.num = 1;
      } else {
          this.num = this.num + '' + 1;
      }
  }

  two() {
    if (this.num == '0') {
        this.num = 2;
    } else {
        this.num = this.num + '' + 2;
    }
  }

  three() {
    if (this.num == '0') {
        this.num = 3;
    } else {
        this.num = this.num + '' + 3;
    }
  }

  four() {
    if (this.num == '0') {
        this.num = 4;
    } else {
        this.num = this.num + '' + 4;
    }
  }

  five() {
    if (this.num == '0') {
        this.num = 5;
    } else {
        this.num = this.num + '' + 5;
    }
  }

  six() {
    if (this.num == '0') {
        this.num = 6;
    } else {
        this.num = this.num + '' + 6;
    }
  }

  seven() {
    if (this.num == '0') {
        this.num = 7;
    } else {
        this.num = this.num + '' + 7;
    }
  }

  eight() {
    if (this.num == '0') {
        this.num = 8;
    } else {
        this.num = this.num + '' + 8;
    }
  }

  nine() {
    if (this.num == '0') {
        this.num = 9;
    } else {
        this.num = this.num + '' + 9;
    }
  }

  zero() {
    if (this.num == '0') {
        this.num = 0;
    } else if (this.operatorPOS != null) {
        if (this.num[this.operatorPOS + 1] != '0') {
            this.num = this.num + '' + 0;
        }
    } else {
        this.num = this.num + '' + 0;
    }
  }

  clear() {
      this.num = '0';
      this.operatorPOS = null;
  }

  backk() {
    const length = this.num.length
    console.log(length)
    if (length > 1) {
        this.num = this.num.substr(0, length - 1);
    } else {
        this.num = '0';
    }
  }

  dec() {
    const str = this.num[this.num.length - 1];
    const full = this.num;
    if (str != '.' || str != '+' || str != '-' || str != '*' || str != '/') {
        if (this.operatorPOS == null) {
            for (let x = 0; x < this.num.length; x++) {
                if (full[x] == '.') {
                    return;
                }
            }
            this.num = this.num + '.';
        } else {
            for (let i = this.operatorPOS + 1; i < full.length; i++) {
                if (full[i] == '.') {
                    return;
                }
            }
            this.num = this.num + '.';
        }
    }
  }

  plus() {
    const str = this.num[this.num.length - 1];
    const full = this.num;
    if (str != '.' || str != '+' || str != '-' || str != '*' || str != '/') {
        for (let i = 0; i < full.length; i++) {
            if (full[i] == '+' ||  full[i] == '*' || full[i] == '/' || full[i + 1] == '-') {
                return;
            }
        }
        this.num = this.num + '+';
        for (let i = 0; i < this.num.length; i++) {
            if (this.num[i] == '+') {
                this.operatorPOS = i;
            }
        }
    }
  }

  minus() {
    const str = this.num[this.num.length - 1];
    const full = this.num;
    if (str != '.' || str != '+' || str != '-' || str != '*' || str != '/') {
        for (let i = 0; i < full.length; i++) {
            if (full[i] == '+' || full[i] == '*' || full[i] == '/' || full[i + 1] == '-') {
                return;
            }
        }
        this.num = this.num + '-';
        for (let i = 0; i < this.num.length; i++) {
            if (this.num[i] == '-') {
                this.operatorPOS = i;
            }
        }
    }
  }

  times() {
    const str = this.num[this.num.length - 1];
    const full = this.num;
    if (str != '.' || str != '+' || str != '-' || str != '*' || str != '/') {
        for (let i = 0; i < full.length; i++) {
            if (full[i] == '+' ||  full[i] == '*' || full[i] == '/' || full[i + 1] == '-') {
                return;
            }
        }
        this.num = this.num + '*';
        for (let i = 0; i < this.num.length; i++) {
            if (this.num[i] == '*') {
                this.operatorPOS = i;
            }
        }
    }
  }

  divide() {
    const str = this.num[this.num.length - 1];
    const full = this.num;
    if (str != '.' || str != '+' || str != '-' || str != '*' || str != '/') {
        for (let i = 0; i < full.length; i++) {
            if (full[i] == '+' ||  full[i] == '*' || full[i] == '/' || full[i + 1] == '-') {
                return;
            }
        }
        this.num = this.num + '/';
        for (let i = 0; i < this.num.length; i++) {
            if (this.num[i] == '/') {
                this.operatorPOS = i;
            }
        }
    }
  }

  equal() {
    let first: any = '';
    let second: any = '';
    let answer: number;
    const op: any = this.num[this.operatorPOS];
    for (let i = 0; i < this.operatorPOS; i++) {
        first = first + this.num[i];
    }
    for (let i = this.operatorPOS + 1; i < this.num.length; i++) {
        second = second + this.num[i];
    }
    answer = eval(first + op + second);
    this.num = answer.toString();
  }

  flip() {
      if (this.num[0] != '-') {
          if (this.num == 0) {
              return
          } else {
              this.num =  '-' + this.num;
          }
      } else {
          this.num = this.num.substring(1);
      }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key == '0') {
        this.zero();
    }
    if (event.key == '1') {
        this.one();
    }
    if (event.key == '2') {
        this.two();
    }
    if (event.key == '3') {
        this.three();
    }
    if (event.key == '4') {
        this.four();
    }
    if (event.key == '5') {
        this.five();
    }
    if (event.key == '6') {
        this.six();
    }
    if (event.key == '7') {
        this.seven();
    }
    if (event.key == '8') {
        this.eight();
    }
    if (event.key == '9') {
        this.nine();
    }
    if (event.key == '-') {
        this.minus();
    }
    if (event.key == '+') {
        this.plus();
    }
    if (event.key == '*') {
        this.times();
    }
    if (event.key == '/') {
        this.divide();
    }
    if (event.key == '.') {
        this.dec();
    }
    if (event.key == 'Enter') {
        this.equal();
    }
    if (event.key == 'Backspace') {
        this.backk();
    }
    if (event.key == 'Delete') {
        this.clear();
    }
    if (event.key == '|') {
        this.flip();
    }
    console.log(event.key);
  }
}
