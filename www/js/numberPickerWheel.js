/**
 * Created by nishan on 4/7/15.
 */
//jscs:disable maximumLineLength
angular.module('NumberPickerWheelDirective', [])

  .directive('niNumPicWheel', function() {
    return {
      restrict: 'E',
      ss: '=[1,2,3]',
      scope: {
        min: '@',
        max: '@',
        values: '@'
      },
      template: '<div>' +
      '<div></div>' +
      'min is  {{min}} max is {{max}} ... {{values}} </div>' +
      '<select >' +
      ' <option value="">0</option>' +
      ' <option value="">2</option>' +
      ' <option value="">3</option>' +
      ' <option value="">4</option>' +
      '</select>' +
      '' +
      '<div id="stage">' +
      '<div id="rotate">' +
      '<div id="ring-1" class="ring" onmouseover="" >' +
      '<div class="poster" style="-webkit-transform: rotateX(21deg) translateZ(50px); "><p>0</p></div>' +
      '<div class="poster" style="-webkit-transform: rotateX(21deg) translateZ(50px); "><p>1</p></div>' +
      '<div class="poster" style="-webkit-transform: rotateX(21deg) translateZ(50px); "><p>2</p></div>' +
      '<div class="poster" style="-webkit-transform: rotateX(21deg) translateZ(50px); "><p>3</p></div>' +
      '<div class="poster" style="-webkit-transform: rotateX(120deg) translateZ(50px); "><p>4</p></div>' +
      '<div class="poster" style="-webkit-transform: rotateX(150deg) translateZ(50px); "><p>5</p></div>' +
      '<div class="poster" style="-webkit-transform: rotateX(180deg) translateZ(50px); "><p>6</p></div>' +
      '<div class="poster" style="-webkit-transform: rotateX(210deg) translateZ(50px); "><p>7</p></div>' +
      '<div class="poster" style="-webkit-transform: rotateX(240deg) translateZ(50px); "><p>8</p></div>' +
      '<div class="poster" style="-webkit-transform: rotateX(270deg) translateZ(50px); "><p>9</p></div>' +
      '<div class="poster" style="-webkit-transform: rotateX(300deg) translateZ(50px); "><p>10</p></div>' +
      '</div>' +
      '</div>' +
      '</div>'
    }
  });
