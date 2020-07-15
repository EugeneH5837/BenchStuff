function Course(title, instructor, level, published, views) {
  this.title = title;
  this.instructor = instructor;
  this.level = level;
  this.published = published;
  this.views = views;
  this.updateViews = function(){
    return this.views++;
  };
}

var courses = [
  new Course("JavaScript Essentials", "Dude", 1, true, 1),
  new Course("JavaScript Essentials2", "Dude", 1, true, 1)
];

var course01 = new Course("JavaScript Essentials", "Dude", 1, true, 1);

console.log(course01);
course01.updateViews();
console.log(course01);

console.log(courses)
console.log(courses[1].title)