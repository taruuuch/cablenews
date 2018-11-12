<?php

use yii\db\Migration;

/**
 * Class m181112_150548_add_user
 */
class m181112_150548_add_user extends Migration
{
    public function up()
    {
        $this->insert('user',[
            'id' => 1,
            'username' => 'admin',
            'password_hash' => Yii::$app->security->generatePasswordHash('admin'),
            'email' => 'no_email@no_email.com'
        ]);
    }

    public function down()
    {
        $this->delete('user', 'id=1');
    }
}
