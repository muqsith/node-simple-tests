function C (n, a, s, g, sc) {
    this.n = n;
    this.a = a;
    this.s = s;
    this.g = g;
    this.d = function(p) {
        console.log(`f ${p.n.firstName}
            Age: ${p.age}
            Stream: ${p.s}
            School: ${p.sc.name}
            Grad: ${p.g}
            `)
    }
}

var ob = C("Ashely", 21, "Science","BTech", "St.Jones");
ob.d(ob);