/*
Will you survive the zombie onslaught?
*/

function zombie_shootout(z, r, a) {
    return "You shot " + (z > (r *= 2) || z > a ? Math.min(a, r) + " zombies before being eaten: " + (a < r ? "ran out of ammo." : "overwhelmed.") : "all " + z + " zombies.");
  }