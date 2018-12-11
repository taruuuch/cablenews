<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\Comment */
/* @var $form ActiveForm */
?>
<div class="news-commentForm">

    <?php $form = ActiveForm::begin(); ?>

        <?= $form->field($model, 'news_id') ?>
        <?= $form->field($model, 'author') ?>
        <?= $form->field($model, 'description') ?>
        <?= $form->field($model, 'moderation') ?>
        <?= $form->field($model, 'publication') ?>
    
        <div class="form-group">
            <?= Html::submitButton('Submit', ['class' => 'btn btn-primary']) ?>
        </div>
    <?php ActiveForm::end(); ?>

</div><!-- news-commentForm -->
