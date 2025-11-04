import 'package:flutter/material.dart';
import 'dart:math' as math;
import 'styles.dart';

// Cleaned client_dashboard.dart — uses centralized `Styles` tokens.

class DashboardShowcase extends StatelessWidget {
  const DashboardShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Styles.background,
      body: SafeArea(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: EdgeInsets.all(Styles.padLarge),
              child: Text(
                'Client Dashboard — Three Approaches',
                style: Styles.h1,
              ),
            ),
            SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              padding: EdgeInsets.symmetric(horizontal: Styles.padLarge / 2),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: const [
                  PhoneFrame(child: Dashboard1()),
                  SizedBox(width: 24),
                  PhoneFrame(child: Dashboard2()),
                  SizedBox(width: 24),
                  PhoneFrame(child: Dashboard3()),
                ],
              ),
            ),
            const SizedBox(height: 48),
          ],
        ),
      ),
    );
  }
}

class PhoneFrame extends StatelessWidget {
  final Widget child;

  const PhoneFrame({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 360,
      height: 760,
      margin: EdgeInsets.only(right: Styles.padLarge),
      decoration: BoxDecoration(
        color: Colors.black,
        borderRadius: BorderRadius.circular(40),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withAlpha(64),
            blurRadius: 30,
            offset: const Offset(0, 20),
          ),
        ],
      ),
      child: Container(
        margin: const EdgeInsets.all(8),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(32),
          color: Styles.surface,
        ),
        clipBehavior: Clip.antiAlias,
        child: child,
      ),
    );
  }
}

class Dashboard1 extends StatelessWidget {
  const Dashboard1({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Styles.surface,
      body: SafeArea(
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Padding(
                padding: EdgeInsets.all(Styles.padLarge),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Welcome back,',
                          style: Styles.label.copyWith(fontSize: 14),
                        ),
                        const SizedBox(height: 6),
                        Text('Marcus', style: Styles.h1),
                      ],
                    ),
                    Container(
                      width: 48,
                      height: 48,
                      decoration: BoxDecoration(
                        color: Styles.surfaceAccent,
                        borderRadius: BorderRadius.circular(24),
                        boxShadow: Styles.neumorphShadowsSoft,
                      ),
                      child: Icon(
                        Icons.notifications_outlined,
                        color: Styles.textPrimary,
                        size: 22,
                      ),
                    ),
                  ],
                ),
              ),

              Padding(
                padding: EdgeInsets.symmetric(horizontal: Styles.padLarge),
                child: Container(
                  padding: EdgeInsets.all(Styles.padLarge),
                  decoration: BoxDecoration(
                    color: Styles.surfaceAccent,
                    borderRadius: BorderRadius.circular(Styles.radiusLarge),
                    boxShadow: Styles.neumorphShadows,
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            'Weekly progress',
                            style: Styles.label.copyWith(fontSize: 16),
                          ),
                          Text(
                            '4 of 5 sessions',
                            style: Styles.label.copyWith(
                              color: Styles.warmAmber,
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 20),
                      Center(
                        child: SizedBox(
                          width: 140,
                          height: 140,
                          child: Stack(
                            alignment: Alignment.center,
                            children: [
                              CustomPaint(
                                size: const Size(140, 140),
                                painter: ProgressRingPainter(progress: 0.8),
                              ),
                              Column(
                                mainAxisSize: MainAxisSize.min,
                                children: [
                                  Text(
                                    '80%',
                                    style: Styles.h1.copyWith(
                                      fontSize: 36,
                                      fontWeight: FontWeight.w700,
                                    ),
                                  ),
                                  Text(
                                    'complete',
                                    style: Styles.label.copyWith(fontSize: 14),
                                  ),
                                ],
                              ),
                            ],
                          ),
                        ),
                      ),
                      const SizedBox(height: 16),
                      Container(
                        padding: EdgeInsets.all(12),
                        decoration: BoxDecoration(
                          color: Styles.surfaceHighlight.withAlpha(128),
                          borderRadius: BorderRadius.circular(
                            Styles.radiusSmall,
                          ),
                        ),
                        child: Row(
                          children: [
                            Icon(Icons.timer_outlined, color: Styles.warmAmber),
                            const SizedBox(width: 8),
                            Expanded(
                              child: Text(
                                'Next session: Lower Body Strength',
                                style: Styles.body.copyWith(
                                  fontWeight: FontWeight.w500,
                                ),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ),

              const SizedBox(height: 20),
              Padding(
                padding: EdgeInsets.symmetric(horizontal: Styles.padLarge),
                child: Text('Today\'s program', style: Styles.h2),
              ),
              const SizedBox(height: 12),

              Padding(
                padding: EdgeInsets.symmetric(horizontal: Styles.padLarge),
                child: Container(
                  padding: EdgeInsets.all(Styles.pad),
                  decoration: BoxDecoration(
                    color: Styles.surfaceAccent,
                    borderRadius: BorderRadius.circular(Styles.radiusMedium),
                    boxShadow: Styles.neumorphShadowsSoft,
                  ),
                  child: Row(
                    children: [
                      Container(
                        width: 60,
                        height: 60,
                        decoration: BoxDecoration(
                          color: Styles.warmAmber.withAlpha(26),
                          borderRadius: BorderRadius.circular(16),
                        ),
                        child: Icon(
                          Icons.fitness_center,
                          color: Styles.warmAmber,
                          size: 28,
                        ),
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('Upper Body Power', style: Styles.h2),
                            const SizedBox(height: 4),
                            Text('45 mins • 6 exercises', style: Styles.body),
                          ],
                        ),
                      ),
                      Container(
                        width: 40,
                        height: 40,
                        decoration: BoxDecoration(
                          color: Styles.warmAmber,
                          borderRadius: BorderRadius.circular(20),
                          boxShadow: [
                            BoxShadow(
                              color: Styles.warmAmber.withAlpha(71),
                              blurRadius: 8,
                              offset: const Offset(0, 4),
                            ),
                          ],
                        ),
                        child: const Icon(
                          Icons.play_arrow_rounded,
                          color: Colors.white,
                          size: 24,
                        ),
                      ),
                    ],
                  ),
                ),
              ),

              const SizedBox(height: 24),
            ],
          ),
        ),
      ),
    );
  }
}

class Dashboard2 extends StatelessWidget {
  const Dashboard2({super.key});

  @override
  Widget build(BuildContext context) => Scaffold(
    backgroundColor: Styles.surface,
    body: Center(child: Text('Dashboard 2 (card feed)', style: Styles.h2)),
  );
}

class Dashboard3 extends StatelessWidget {
  const Dashboard3({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Styles.surface,
      body: SafeArea(
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Padding(
                padding: EdgeInsets.fromLTRB(
                  Styles.padLarge,
                  Styles.padLarge,
                  Styles.padLarge,
                  8,
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text('Dashboard', style: Styles.h1),
                    Container(
                      width: 48,
                      height: 48,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        gradient: LinearGradient(
                          colors: [Styles.warmAmber, Styles.warmAmberLight],
                        ),
                        boxShadow: [
                          BoxShadow(
                            color: Styles.warmAmber.withAlpha(64),
                            blurRadius: 8,
                            offset: const Offset(0, 2),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
              Padding(
                padding: EdgeInsets.symmetric(horizontal: Styles.padLarge),
                child: Text('Week of December 2', style: Styles.label),
              ),
              const SizedBox(height: 24),

              Padding(
                padding: EdgeInsets.symmetric(horizontal: Styles.padLarge),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: List.generate(
                    7,
                    (i) => _CalendarDay(
                      day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i],
                      date: '${2 + i}',
                      completed: i % 2 == 0,
                      today: i == 1,
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 24),
            ],
          ),
        ),
      ),
    );
  }
}

// ignore: unused_element
class _StatCard extends StatelessWidget {
  final String label;
  final String value;
  final String unit;
  final IconData icon;

  const _StatCard({
    required this.label,
    required this.value,
    required this.unit,
    required this.icon,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Styles.surfaceAccent,
        borderRadius: BorderRadius.circular(16),
        boxShadow: [
          BoxShadow(
            color: Styles.surfaceHighlight.withAlpha(204),
            offset: const Offset(-2, -2),
            blurRadius: 6,
          ),
          BoxShadow(
            color: Styles.neutralShadow.withAlpha(64),
            offset: const Offset(2, 2),
            blurRadius: 6,
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(icon, size: 20, color: Styles.warmAmber),
          const SizedBox(height: 8),
          Row(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Text(
                value,
                style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.w700,
                  color: Styles.textPrimary,
                ),
              ),
              const SizedBox(width: 6),
              Padding(
                padding: const EdgeInsets.only(bottom: 2),
                child: Text(
                  unit,
                  style: Styles.body.copyWith(
                    fontSize: 11,
                    color: Styles.textSecondary,
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 6),
          Text(
            label,
            style: Styles.body.copyWith(
              fontSize: 12,
              color: Styles.textSecondary,
            ),
          ),
        ],
      ),
    );
  }
}

// ignore: unused_element
class _CompactStat extends StatelessWidget {
  final String value;
  final String label;
  final Color color;

  const _CompactStat({
    required this.value,
    required this.label,
    required this.color,
  });

  @override
  Widget build(BuildContext context) => Column(
    children: [
      Text(
        value,
        style: TextStyle(
          fontSize: 20,
          fontWeight: FontWeight.w700,
          color: color,
        ),
      ),
      const SizedBox(height: 4),
      Text(label, style: TextStyle(fontSize: 12, color: Styles.textSecondary)),
    ],
  );
}

// ignore: unused_element
class _ActivityCard extends StatelessWidget {
  final String title;
  final String time;
  final String duration;
  final String calories;
  final bool completed;

  const _ActivityCard({
    required this.title,
    required this.time,
    required this.duration,
    required this.calories,
    required this.completed,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(horizontal: Styles.padLarge),
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: Styles.surfaceAccent,
          borderRadius: BorderRadius.circular(16),
          boxShadow: [
            BoxShadow(
              color: Styles.surfaceHighlight.withAlpha(204),
              offset: const Offset(-2, -2),
              blurRadius: 6,
            ),
            BoxShadow(
              color: Styles.neutralShadow.withAlpha(64),
              offset: const Offset(2, 2),
              blurRadius: 6,
            ),
          ],
        ),
        child: Row(
          children: [
            Container(
              width: 40,
              height: 40,
              decoration: BoxDecoration(
                color: Styles.sage.withAlpha(38),
                borderRadius: BorderRadius.circular(12),
              ),
              child: Icon(Icons.check_circle, color: Styles.sage, size: 20),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    title,
                    style: TextStyle(
                      fontSize: 15,
                      fontWeight: FontWeight.w600,
                      color: Styles.textPrimary,
                    ),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    time,
                    style: Styles.body.copyWith(
                      fontSize: 13,
                      color: Styles.textSecondary,
                    ),
                  ),
                ],
              ),
            ),
            Column(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                Text(
                  duration,
                  style: TextStyle(
                    fontSize: 14,
                    fontWeight: FontWeight.w600,
                    color: Styles.textPrimary,
                  ),
                ),
                Text(
                  calories,
                  style: TextStyle(fontSize: 12, color: Styles.textSecondary),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class _CalendarDay extends StatelessWidget {
  final String day;
  final String date;
  final bool completed;
  final bool today;

  const _CalendarDay({
    required this.day,
    required this.date,
    required this.completed,
    required this.today,
  });

  @override
  Widget build(BuildContext context) {
    final bgColor = today ? Styles.warmAmber : Styles.surfaceAccent;
    return Column(
      children: [
        Text(day, style: TextStyle(fontSize: 12, color: Styles.textSecondary)),
        const SizedBox(height: 8),
        Container(
          width: 44,
          height: 44,
          decoration: BoxDecoration(
            color: bgColor,
            borderRadius: BorderRadius.circular(22),
            boxShadow: today
                ? [
                    BoxShadow(
                      color: Styles.warmAmber.withAlpha(71),
                      blurRadius: 8,
                      offset: const Offset(0, 2),
                    ),
                  ]
                : [
                    BoxShadow(
                      color: Styles.surfaceHighlight.withAlpha(204),
                      offset: const Offset(-2, -2),
                      blurRadius: 6,
                    ),
                    BoxShadow(
                      color: Styles.neutralShadow.withAlpha(64),
                      offset: const Offset(2, 2),
                      blurRadius: 6,
                    ),
                  ],
          ),
          child: Stack(
            alignment: Alignment.center,
            children: [
              Text(
                date,
                style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.w600,
                  color: today ? Colors.white : Styles.textPrimary,
                ),
              ),
              if (completed && !today)
                Positioned(
                  top: 4,
                  right: 4,
                  child: Container(
                    width: 8,
                    height: 8,
                    decoration: BoxDecoration(
                      color: Styles.sage,
                      shape: BoxShape.circle,
                    ),
                  ),
                ),
            ],
          ),
        ),
      ],
    );
  }
}

class ProgressRingPainter extends CustomPainter {
  final double progress;

  ProgressRingPainter({required this.progress});

  @override
  void paint(Canvas canvas, Size size) {
    final center = Offset(size.width / 2, size.height / 2);
    final radius = size.width / 2;

    final backgroundPaint = Paint()
      ..color = Styles.neutralShadow.withAlpha(46)
      ..strokeWidth = 10
      ..style = PaintingStyle.stroke
      ..strokeCap = StrokeCap.round;
    canvas.drawCircle(center, radius - 5, backgroundPaint);

    final progressPaint = Paint()
      ..shader = LinearGradient(
        colors: [Styles.warmAmber, Styles.warmAmberLight],
      ).createShader(Rect.fromCircle(center: center, radius: radius))
      ..strokeWidth = 10
      ..style = PaintingStyle.stroke
      ..strokeCap = StrokeCap.round;
    canvas.drawArc(
      Rect.fromCircle(center: center, radius: radius - 5),
      -math.pi / 2,
      2 * math.pi * progress,
      false,
      progressPaint,
    );
  }

  @override
  bool shouldRepaint(covariant ProgressRingPainter oldDelegate) =>
      oldDelegate.progress != progress;
}
