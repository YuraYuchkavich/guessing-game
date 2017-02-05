class GuessingGame {
  constructor() {
        this.array = [];
        this.startIndex = null;
        this.endIndex = null;
        this.middleIndex = null;
    }

    setRange(min, max) {
        for (let i = min; i <= max; i++) {
            this.array.push(i);
        }

        this.startIndex = 0;
        this.endIndex = this.array.length - 1;
    }

    guess() {
        this.middleIndex = (this.startIndex + this.endIndex) / 2;
        this.middleIndex = Math.ceil(this.middleIndex);

        return this.array[this.middleIndex];
    }

    lower() {
        this.endIndex = this.middleIndex;
    }

    greater() {
        this.startIndex = this.middleIndex;
    }
}

module.exports = GuessingGame;
