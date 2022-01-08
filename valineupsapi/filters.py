import django_filters

class CustomFilterList(django_filters.Filter):
  def filter(self, qs, value):
    if value not in (None, ''):
      values = [v for v in value.split(',')]
      return qs.filter(**{'%s__%s' % (self.name, self.lookup_type): values})
    return qs

class LineupFilter(django_filters.FilterSet):
  agent = django_filters.CharFilter(lookup_expr='iexact')
  gameMap = django_filters.CharFilter(lookup_expr='iexact')
  site = django_filters.ModelMultipleChoiceFilter(queryset=Lineup.objects.all(), )
