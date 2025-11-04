import 'package:flutter/material.dart';
import 'client_dashboard.dart';
import 'styles.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  final ThemeMode _themeMode = ThemeMode.light;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Fitness Dashboard Design',
      debugShowCheckedModeBanner: false,
      themeMode: _themeMode,
      theme: Styles.themeData(dark: false),
      darkTheme: Styles.themeData(dark: true),
      home: const DashboardShowcase(),
      // Uncomment below to see the original UI playground
      // home: HomePage(
      //   themeMode: _themeMode,
      //   onThemeChanged: _handleThemeChanged,
      // ),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({
    super.key,
    required this.themeMode,
    required this.onThemeChanged,
  });

  final ThemeMode themeMode;
  final ValueChanged<bool> onThemeChanged;

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  double _sliderValue = 40;
  bool _notificationsEnabled = true;
  final TextEditingController _textController = TextEditingController();

  @override
  void dispose() {
    _textController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final bool isDarkMode = widget.themeMode == ThemeMode.dark;
    return Scaffold(
      appBar: AppBar(
        title: const Text('UI Playground'),
        actions: [
          Row(
            children: [
              const Icon(Icons.light_mode),
              Switch(value: isDarkMode, onChanged: widget.onThemeChanged),
              const Icon(Icons.dark_mode),
              const SizedBox(width: 8),
            ],
          ),
        ],
      ),
      body: SafeArea(
        child: ListView(
          padding: const EdgeInsets.all(16),
          children: [
            _Section(
              title: 'Typography',
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Headline Large',
                    style: Theme.of(context).textTheme.headlineLarge,
                  ),
                  Text(
                    'Body Medium text to preview paragraph styling. '
                    'Use this area to quickly compare various fonts and colors.',
                    style: Theme.of(context).textTheme.bodyMedium,
                  ),
                  Text(
                    'Label Small',
                    style: Theme.of(context).textTheme.labelSmall,
                  ),
                ],
              ),
            ),
            _Section(
              title: 'Buttons',
              child: Wrap(
                spacing: 12,
                runSpacing: 12,
                children: [
                  ElevatedButton(
                    onPressed: () {},
                    child: const Text('Elevated'),
                  ),
                  FilledButton(onPressed: () {}, child: const Text('Filled')),
                  OutlinedButton(
                    onPressed: () {},
                    child: const Text('Outlined'),
                  ),
                  TextButton(
                    onPressed: () {},
                    child: const Text('Text Button'),
                  ),
                ],
              ),
            ),
            _Section(
              title: 'Cards & Lists',
              child: Column(
                children: [
                  Card(
                    child: ListTile(
                      leading: const CircleAvatar(child: Icon(Icons.person)),
                      title: const Text('List Tile'),
                      subtitle: const Text(
                        'Use cards to group related information.',
                      ),
                      trailing: IconButton(
                        onPressed: () {},
                        icon: const Icon(Icons.more_horiz),
                        tooltip: 'More actions',
                      ),
                    ),
                  ),
                  const SizedBox(height: 12),
                  Container(
                    padding: const EdgeInsets.all(16),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(12),
                      gradient: LinearGradient(
                        colors: [
                          Theme.of(context).colorScheme.primaryContainer,
                          Theme.of(context).colorScheme.secondaryContainer,
                        ],
                      ),
                    ),
                    child: Row(
                      children: [
                        Icon(
                          Icons.bolt,
                          color: Theme.of(
                            context,
                          ).colorScheme.onPrimaryContainer,
                        ),
                        const SizedBox(width: 12),
                        Expanded(
                          child: Text(
                            'Experiment with gradients, rounded corners, and shadows to refine your look.',
                            style: Theme.of(context).textTheme.bodyMedium
                                ?.copyWith(fontWeight: FontWeight.w600),
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            _Section(
              title: 'Form Elements',
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  TextField(
                    controller: _textController,
                    decoration: const InputDecoration(
                      labelText: 'Text field',
                      hintText: 'Type to test input styles',
                      prefixIcon: Icon(Icons.search),
                    ),
                  ),
                  const SizedBox(height: 16),
                  SwitchListTile(
                    contentPadding: EdgeInsets.zero,
                    title: const Text('Enable notifications'),
                    value: _notificationsEnabled,
                    onChanged: (value) =>
                        setState(() => _notificationsEnabled = value),
                  ),
                  const SizedBox(height: 8),
                  Text('Slider value: ${_sliderValue.round()}'),
                  Slider(
                    value: _sliderValue,
                    min: 0,
                    max: 100,
                    divisions: 5,
                    label: _sliderValue.round().toString(),
                    onChanged: (value) => setState(() => _sliderValue = value),
                  ),
                ],
              ),
            ),
            _Section(
              title: 'Chips',
              child: Wrap(
                spacing: 8,
                runSpacing: 8,
                children: const [
                  FilterChip(
                    label: Text('Design'),
                    selected: true,
                    onSelected: null,
                  ),
                  Chip(label: Text('Prototype')),
                  InputChip(
                    label: Text('Review'),
                    avatar: Icon(Icons.check),
                    onPressed: null,
                  ),
                  ActionChip(label: Text('Action'), onPressed: null),
                ],
              ),
            ),
            _Section(
              title: 'Empty States',
              child: Container(
                width: double.infinity,
                padding: const EdgeInsets.all(24),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(16),
                  color: Theme.of(context).colorScheme.surfaceContainerHighest,
                  border: Border.all(
                    color: Theme.of(context).colorScheme.outlineVariant,
                  ),
                ),
                child: Column(
                  children: [
                    Icon(
                      Icons.inbox_outlined,
                      size: 48,
                      color: Theme.of(context).colorScheme.primary,
                    ),
                    const SizedBox(height: 12),
                    Text(
                      'Nothing here yet',
                      style: Theme.of(context).textTheme.titleMedium,
                    ),
                    const SizedBox(height: 4),
                    Text(
                      'Use this space to preview empty states or onboarding screens.',
                      textAlign: TextAlign.center,
                      style: Theme.of(context).textTheme.bodyMedium,
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: () {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(
              content: Text('Try updating this screen to test ideas!'),
            ),
          );
        },
        icon: const Icon(Icons.play_arrow),
        label: const Text('Show SnackBar'),
      ),
    );
  }
}

class _Section extends StatelessWidget {
  const _Section({required this.title, required this.child});

  final String title;
  final Widget child;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 24),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            title,
            style: Theme.of(
              context,
            ).textTheme.titleMedium?.copyWith(fontWeight: FontWeight.bold),
          ),
          const SizedBox(height: 12),
          child,
        ],
      ),
    );
  }
}
