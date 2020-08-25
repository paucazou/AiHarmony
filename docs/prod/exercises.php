<?php
require_once "lib/mlib.php";
require_once "lib/elib.php";
require_once "lib/config.php";
require_once "lib/auth.php";

$id = secure_variable("id");

$title = "$site_name: Exercises";
$login_result = login();

require_once "template/menu.php";
echo "<div class=container><br>";

echo "<h3><center>Exercises</center></h3>";
echo "<table class='table'>"; // table-striped table-hover
echo "<thead>";
echo "<tr>";
echo "<th scope=col>ID</th>";
echo "<th scope=col>Published</th>";
echo "<th scope=col>User</th>";
echo "<th scope=col>Title</th>";
echo "<th scope=col>Revisions</th>";
echo "</tr>\n";
echo "</thead>";
echo "<tbody>";

$r = query("
  SELECT * FROM exercises
  LEFT JOIN root_exercises USING (root_eid)
  LEFT JOIN users ON (exercises.u_id=users.u_id)
  WHERE eid=1
  ORDER BY root_eid DESC
  LIMIT 1000
");
$n = mysqli_num_rows($r);
for ($i=0; $i<$n; ++$i) {
  $w = mysqli_fetch_assoc($r);
  $uname = $w['u_name'] ? $w['u_name'] : $w['u_cookie'];
  // Authenticated
  if ($w['security'] > 0 && !$login_result) {
    continue;
  }
  // Admin
  if ($w['security'] == 2 && !$ua['u_admin'] && $ua['u_login'] != $w['u_name']) {
    continue;
  }
  // Private
  if ($w['security'] == 3 && $ua['u_login'] != $w['u_name']) {
    continue;
  }
  echo "<tr>";
  echo "<td>$w[root_eid]</td>";
  echo "<td><a href='exercise.php?id=$w[root_eid]'>$w[publish_time]</td>";
  echo "<td>$uname</td>";
  echo "<td><a href='exercise.php?id=$w[root_eid]'>";
  show_elock($w['security']);
  echo "$w[title]</td>";
  echo "<td>$w[ecount]</td>";
  echo "</tr>";
}
echo "</tbody>";
echo "</table>";

require_once "template/footer.php";