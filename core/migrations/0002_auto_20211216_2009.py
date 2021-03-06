# Generated by Django 3.2.8 on 2021-12-16 20:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='directmessage',
            name='owner',
        ),
        migrations.RemoveField(
            model_name='directmessage',
            name='receiver',
        ),
        migrations.RemoveField(
            model_name='ingredientused',
            name='Ingredient',
        ),
        migrations.RemoveField(
            model_name='ingredientused',
            name='used_in',
        ),
        migrations.AlterUniqueTogether(
            name='like',
            unique_together=None,
        ),
        migrations.RemoveField(
            model_name='like',
            name='like_by',
        ),
        migrations.RemoveField(
            model_name='like',
            name='post',
        ),
        migrations.RemoveField(
            model_name='post',
            name='owner',
        ),
        migrations.RemoveField(
            model_name='recipepost',
            name='post_ptr',
        ),
        migrations.DeleteModel(
            name='Comment',
        ),
        migrations.DeleteModel(
            name='DirectMessage',
        ),
        migrations.DeleteModel(
            name='Ingredient',
        ),
        migrations.DeleteModel(
            name='IngredientUsed',
        ),
        migrations.DeleteModel(
            name='Like',
        ),
        migrations.DeleteModel(
            name='Post',
        ),
        migrations.DeleteModel(
            name='RecipePost',
        ),
    ]
