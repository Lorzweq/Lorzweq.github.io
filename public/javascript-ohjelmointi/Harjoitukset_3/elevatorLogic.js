class Elevator {
    constructor(display, status, keypad) {
        this.display = display;
        this.status = status;
        this.keypad = keypad;
        
        this.MIN_FLOOR = 1;
        this.MAX_FLOOR = 100;
        this.SPEED = 300;

        this.currentFloor = 1;
        this.targetFloor = 1;
        this.input = "";
        this.moving = false;
        this.timer = null;

        this.showDisplay();
        this.showStatus();
    }

    press(key) {
        if (this.moving) return;

        if(key === "C") {
            this.clear();
        } else if(key === "GO") {
            this.go();
        } else {
            this.addDigit(key);
        }
    }

    addDigit(digit) {
        if (this.input === "" && digit === "0") return;

        const candidate = this.input + digit;
        if (parseInt(candidate) > this.MAX_FLOOR) return;

        this.input = candidate;
        this.showDisplay();
    }

    clear() {
        this.input = "";
        this.showDisplay();
        this.showStatus();
    }

    go() {
        const target = parseInt(this.input, 10);

        if (isNaN(target) || target < this.MIN_FLOOR || target > this.MAX_FLOOR) {
            this.status.textContent = "Choose floor between 1 and 100";
            return;
        }

        if (target === this.currentFloor) {
            this.clear();
            return;
        }

        this.targetFloor = target;
        this.moving = true;
        this.keypad.classList.add("locked");
        this.showStatus();

        this.timer = setInterval(() => this.step(), this.SPEED);

    }

    step() {
        if (this.currentFloor < this.targetFloor) {
            this.currentFloor++;
        } else if (this.currentFloor > this.targetFloor) {
            this.currentFloor--;
        }

        if (this.currentFloor === this.targetFloor) {
            clearInterval(this.timer);
            this.timer = null;
            this.moving = false;
            this.keypad.classList.remove("locked");
            this.input = "";
            this.showDisplay();
        }

        this.showStatus();
    }

    showDisplay() {
        this.display.value = this.input;
    }

    showStatus() {
        this.status.textContent = this.moving
            ? "Elevator is now going to floor: " + this.targetFloor
            : "Elevator is now in floor: " + this.currentFloor;
    }

}

const keypad = document.getElementById("keypad");

const elevator = new Elevator(
    document.getElementById("display"),
    document.getElementById("status"),
    keypad
);

// Yksi kuuntelija koko näppäimistölle, ei kahtatoista erikseen
keypad.addEventListener("click", (event) => {
    const button = event.target.closest(".key");
    if (!button) return;

    elevator.press(button.dataset.key);
});