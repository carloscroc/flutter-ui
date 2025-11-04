import 'package:flutter/material.dart';

class Styles {
  // Colors
  static const Color background = Color(0xFFF0EDE8); // warm cream
  static const Color surface = Color(0xFFF8F6F3);
  static const Color surfaceAccent = Color(0xFFF5F3F0);
  static const Color surfaceHighlight = Color(0xFFFFFCF7);

  static const Color textPrimary = Color(0xFF2C2520);
  static const Color textSecondary = Color(0xFF6B6157);

  // Accent gradient (aqua -> navy)
  static const Color accentAqua = Color(0xFF4CD0C8);
  static const Color accentNavy = Color(0xFF0E1C2A);
  static const LinearGradient primaryGradient = LinearGradient(
    colors: [accentAqua, accentNavy],
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
  );

  // Secondary/warm accents
  static const Color warmAmber = Color(0xFFC1694F);
  static const Color warmAmberLight = Color(0xFFD47B5F);
  static const Color neutralShadow = Color(0xFFA79E94);
  static const Color sage = Color(0xFF8B9D83);
  static const Color warmTan = Color(0xFFD4A574);

  // Radii and spacing
  static const double radiusSmall = 12.0;
  static const double radiusMedium = 20.0;
  static const double radiusLarge = 24.0;

  static const double padSmall = 8.0;
  static const double pad = 16.0;
  static const double padLarge = 24.0;

  // Text styles
  static const TextStyle h1 = TextStyle(
    fontSize: 24,
    fontWeight: FontWeight.w600,
    color: textPrimary,
    letterSpacing: -0.2,
    height: 1.2,
  );

  static const TextStyle h2 = TextStyle(
    fontSize: 18,
    fontWeight: FontWeight.w600,
    color: textPrimary,
  );

  static const TextStyle body = TextStyle(
    fontSize: 14,
    fontWeight: FontWeight.w400,
    color: textPrimary,
    height: 1.6,
    letterSpacing: 0.2,
  );

  static const TextStyle label = TextStyle(
    fontSize: 15,
    fontWeight: FontWeight.w500,
    color: textSecondary,
  );

  // Neumorphic-like warm shadows (not const because of opacity usage)
  static final List<BoxShadow> neumorphShadows = [
    BoxShadow(
      color: surfaceHighlight.withAlpha(217),
      offset: const Offset(-4, -4),
      blurRadius: 12,
    ),
    BoxShadow(
      color: neutralShadow.withAlpha(77),
      offset: const Offset(4, 4),
      blurRadius: 12,
    ),
  ];

  // Softer smaller shadow
  static final List<BoxShadow> neumorphShadowsSoft = [
    BoxShadow(
      color: surfaceHighlight.withAlpha(204),
      offset: const Offset(-3, -3),
      blurRadius: 8,
    ),
    BoxShadow(
      color: neutralShadow.withAlpha(64),
      offset: const Offset(3, 3),
      blurRadius: 8,
    ),
  ];

  // Glass overlay color (use with BackdropFilter)
  // (defined below using withAlpha to avoid deprecated withOpacity)

  // Provide a ThemeData built from these design tokens so the app can
  // consume a single source of truth for colors and typography.
  static ThemeData themeData({bool dark = false}) {
    final brightness = dark ? Brightness.dark : Brightness.light;

    final base = ThemeData(
      brightness: brightness,
      useMaterial3: true,
      fontFamily: 'SF Pro Display',
    );

    return base.copyWith(
      scaffoldBackgroundColor: background,
      colorScheme: ColorScheme.fromSeed(
        seedColor: accentAqua,
        brightness: brightness,
        primary: warmAmber,
        secondary: accentAqua,
        surface: surface,
        onPrimary: Colors.white,
        onSurface: textPrimary,
      ),
      textTheme: TextTheme(
        headlineLarge: h1,
        headlineMedium: h2,
        bodyMedium: body,
        labelSmall: label,
      ),
      appBarTheme: AppBarTheme(
        backgroundColor: surface,
        elevation: 0,
        iconTheme: IconThemeData(color: textPrimary),
        titleTextStyle: h1,
        toolbarTextStyle: h1,
      ),
    );
  }
  static final Color glassFill = Colors.white.withAlpha(153);
}
