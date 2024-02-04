new Vue({
  el: '#app',
  data: {
    seats: [],
    message: 'Odaberite sedište'
  },
  mounted() {
    for (let i = 1; i <= 15 * 15; i++) {
      this.seats.push({ id: i, selected: false, hoverId: null });
    }
  },
  computed: {
    selectedSeats: function() {
      return this.seats.filter(seat => seat.selected).map(seat => seat.id);
    }
  },
  methods: {
    resetSeats: function() {
      this.seats.forEach(seat => {
        seat.selected = false;
      });
    },
    hideSeatNumber: function(seatId) {
      this.seats.forEach(seat => {
        if (seat.id === seatId) {
          seat.hoverId = null;
        }
      });
    },
    toggleSeat: function(seat) {
      if (this.selectedSeats.length >= 5 && !seat.selected) return;
      seat.selected = !seat.selected;
    }
  }
});