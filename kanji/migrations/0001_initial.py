# Generated by Django 4.0.1 on 2022-01-12 02:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Kanji',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('kanji', models.CharField(max_length=100)),
                ('strokes', models.IntegerField(default=0)),
                ('meaning', models.CharField(blank=True, max_length=100)),
                ('pronounciation', models.CharField(blank=True, max_length=100)),
                ('reading', models.CharField(blank=True, max_length=100)),
                ('grade', models.IntegerField(default=0)),
            ],
        ),
    ]
