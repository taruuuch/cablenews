<?php

namespace app\controllers;

class CommentController extends \yii\web\Controller
{
    public function actionComment()
    {
        return $this->render('comment');
    }

}
