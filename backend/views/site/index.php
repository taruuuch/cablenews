<?php

/* @var $this yii\web\View */

$this->title = 'Admin Panel';
?>
<?php
if(\Yii::$app->session->hasFlash('success')){
    \Yii::$app->session->getFlash('success');
}
?>
<div class="admin-default-index">

    <h1 style="margin: 20% 30%;
        font-size: 60px;
        font-weight: bold;" >Admin Decron</h1>

</div>