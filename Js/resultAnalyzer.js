export function analyzeResult(score, maxScore) {
    const percentage = ((score + maxScore) / (2 * maxScore)) * 100;
    
    if (percentage < 25) {
        return {
            category: "Normal Personality",
            description: "Your results indicate typical empathy levels and healthy emotional connections. You show normal emotional responses and social behavior patterns."
        };
    } else if (percentage < 50) {
        return {
            category: "Mild Antisocial Tendencies",
            description: "You display some antisocial traits, but these are within normal boundaries. While you might be more independent or assertive than average, you maintain healthy relationships and emotional connections."
        };
    } else if (percentage < 75) {
        return {
            category: "Sociopathic Tendencies",
            description: "Your results suggest sociopathic tendencies. This often indicates learned antisocial behaviors, possibly due to environmental factors. You might struggle with empathy but can still form connections. Remember, this is not a clinical diagnosis."
        };
    } else {
        return {
            category: "Psychopathic Tendencies",
            description: "Your results indicate strong psychopathic tendencies, characterized by reduced empathy and stronger manipulative traits. This suggests inherent antisocial patterns, but remember this is just a screening tool, not a clinical diagnosis. If concerned, consider consulting a mental health professional."
        };
    }
}