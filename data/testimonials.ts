export const testimonials = [
  {
    name: "Sarah Thompson",
    relation: "Parent of 3rd grader",
    content:
      "Shivani has been a blessing for our family. My son struggled with math anxiety, but after just a few sessions, he's approaching problems with confidence. Her patience and teaching methods are exceptional.",
  },
  {
    name: "Michael Rodriguez",
    relation: "Parent of 6th grader",
    content:
      "Our daughter's science grades have improved dramatically since working with Shivani. She makes complex concepts easy to understand and keeps learning fun and engaging.",
  },
  {
    name: "Vedant Khanna",
    relation: "Son of Shivani Khanna",
    content:
      "I have been a student of Shivani Khanna for 18 years. She has been the best teacher I have ever had because no one else cares as much about her students as she does. I am now studying Math at Stanford University.",
  },
];

export type Testimonial = {
  name: string;
  relation: string;
  content: string;
};
