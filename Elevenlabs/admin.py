from django.contrib import admin
from . import models as my_models 

@admin.register(my_models.ElevenData)
class ElevenDataAdmin(admin.ModelAdmin):
    list_display = ("input_text", "date_text")
    list_filter = ("input_text", "date_text")
    search_fields = ("input_text", "date_text")
    list_per_page = 10
    ordering = ("input_text", "date_text")
    list_max_show_all = 200
