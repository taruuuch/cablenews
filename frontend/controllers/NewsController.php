<?php

namespace app\controllers;

class NewsController extends \yii\web\Controller
{
    public function actionNews()
    {
        return $this->render('news');
    }

}
