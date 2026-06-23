#!/usr/bin/env python3
"""
Convert all single-quoted strings to double-quoted strings in readData.ts.
Already double-quoted strings and template literals are left untouched.
Escape sequences are handled properly.
"""
import sys

def convert_file(filepath: str):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    converted = convert_all_strings(content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(converted)

    print(f"Converted {filepath}")

def convert_all_strings(content: str) -> str:
    """Convert all single-quoted strings to double-quoted.
    Leaves already-double-quoted strings and template literals untouched."""
    result = []
    i = 0
    n = len(content)

    while i < n:
        ch = content[i]

        if ch == "'":
            # Single-quoted string — parse and convert
            string_content, new_i = parse_single_quoted_string(content, i)
            converted = convert_content_for_double_quotes(string_content)
            result.append('"')
            result.append(converted)
            result.append('"')
            i = new_i

        elif ch == '"':
            # Already double-quoted — leave untouched
            string_content, new_i = parse_double_quoted_string(content, i)
            result.append('"')
            result.append(string_content)
            result.append('"')
            i = new_i

        elif ch == '`':
            # Template literal — leave untouched
            string_content, new_i = parse_template_literal(content, i)
            result.append('`')
            result.append(string_content)
            result.append('`')
            i = new_i

        else:
            result.append(ch)
            i += 1

    return ''.join(result)

def parse_single_quoted_string(content: str, start: int) -> tuple:
    """Parse a single-quoted string starting at content[start] (the opening ').
    Returns (string_content, index_after_closing_quote)."""
    assert content[start] == "'"
    result = []
    i = start + 1

    while i < len(content):
        c = content[i]
        if c == '\\':
            # Escape sequence — capture both the backslash and next char
            result.append('\\')
            if i + 1 < len(content):
                result.append(content[i + 1])
                i += 2
            else:
                # Backslash at end of file — shouldn't happen
                i += 1
        elif c == "'":
            # End of string
            return ''.join(result), i + 1
        else:
            result.append(c)
            i += 1

    # No closing quote found — shouldn't happen, but return what we have
    return ''.join(result), i

def parse_double_quoted_string(content: str, start: int) -> tuple:
    """Parse a double-quoted string starting at content[start] (the opening ").
    Returns (string_content, index_after_closing_quote)."""
    assert content[start] == '"'
    result = []
    i = start + 1

    while i < len(content):
        c = content[i]
        if c == '\\':
            # Escape sequence
            result.append('\\')
            if i + 1 < len(content):
                result.append(content[i + 1])
                i += 2
            else:
                i += 1
        elif c == '"':
            # End of string
            return ''.join(result), i + 1
        else:
            result.append(c)
            i += 1

    return ''.join(result), i

def parse_template_literal(content: str, start: int) -> tuple:
    """Parse a template literal starting at content[start] (the opening `)."""
    assert content[start] == '`'
    result = []
    i = start + 1

    while i < len(content):
        c = content[i]
        if c == '\\':
            result.append('\\')
            if i + 1 < len(content):
                result.append(content[i + 1])
                i += 2
            else:
                i += 1
        elif c == '`':
            # Check for ${
            return ''.join(result), i + 1
        elif c == '$' and i + 1 < len(content) and content[i + 1] == '{':
            # Template interpolation — preserve as-is
            result.append('${')
            i += 2
        else:
            result.append(c)
            i += 1

    return ''.join(result), i

def convert_content_for_double_quotes(content: str) -> str:
    """
    Convert string content from single-quoted escaping to double-quoted escaping.

    In single-quoted strings (original):
      \'  → literal '
      \\  → literal '\'
      \"  → literal '"'  (rare; " doesn't need escaping in single quotes)
      "   → literal '"'

    In double-quoted strings (target):
      \"  → literal '"'
      \\  → literal '\'
      \'  → literal ''' (rare; ' doesn't need escaping in double quotes)
      '   → literal '''
    """
    result = []
    i = 0
    n = len(content)

    while i < n:
        ch = content[i]
        if ch == '\\' and i + 1 < n:
            next_ch = content[i + 1]
            if next_ch == "'":
                # \' in single-quoted = literal '
                # In double-quoted, just ' (no escape needed)
                result.append("'")
                i += 2
            elif next_ch == '\\':
                # \\ stays as \\ (escaped backslash in both)
                result.append("\\\\")
                i += 2
            elif next_ch == '"':
                # \" in single-quoted = literal "
                # In double-quoted, must be \"
                result.append('\\"')
                i += 2
            else:
                # Other escape (\n, \t, etc.) — preserve
                result.append('\\')
                result.append(next_ch)
                i += 2
        elif ch == '"':
            # Literal " in single-quoted must be escaped in double-quoted
            result.append('\\"')
            i += 1
        else:
            result.append(ch)
            i += 1

    return ''.join(result)

def main():
    filepath = sys.argv[1] if len(sys.argv) > 1 else 'src/mock/readData.ts'

    # Backup
    with open(filepath, 'r', encoding='utf-8') as f:
        original = f.read()

    converted = convert_all_strings(original)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(converted)

    # Quick sanity check
    single_quotes_remaining = 0
    for ch in converted:
        if ch == "'":
            single_quotes_remaining += 1

    print(f"Converted {filepath}")
    print(f"  Original size: {len(original)} chars")
    print(f"  Converted size: {len(converted)} chars")
    print(f"  Single quotes remaining: {single_quotes_remaining}")

if __name__ == '__main__':
    main()
