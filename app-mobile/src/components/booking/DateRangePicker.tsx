import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import {
  format,
  addMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
  isBefore,
  isAfter,
  startOfDay,
  getDay,
} from 'date-fns';
import { fr } from 'date-fns/locale';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/colors';

interface DateRangePickerProps {
  checkIn: string | null;
  checkOut: string | null;
  onSelect: (checkIn: string, checkOut: string) => void;
  visible: boolean;
  onClose: () => void;
}

const DAY_NAMES = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

export function DateRangePicker({
  checkIn,
  checkOut,
  onSelect,
  visible,
  onClose,
}: DateRangePickerProps) {
  const today = startOfDay(new Date());
  const [currentMonth, setCurrentMonth] = useState(today);
  const [selectingStart, setSelectingStart] = useState(true);
  const [tempStart, setTempStart] = useState<Date | null>(
    checkIn ? startOfDay(new Date(checkIn)) : null
  );
  const [tempEnd, setTempEnd] = useState<Date | null>(
    checkOut ? startOfDay(new Date(checkOut)) : null
  );

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const startWeekday = getDay(monthStart); // 0 = Sunday

  const handleDayPress = (day: Date) => {
    if (isBefore(day, today)) return;

    if (selectingStart || !tempStart) {
      setTempStart(day);
      setTempEnd(null);
      setSelectingStart(false);
    } else {
      if (isBefore(day, tempStart) || isSameDay(day, tempStart)) {
        setTempStart(day);
        setTempEnd(null);
        return;
      }
      setTempEnd(day);
      setSelectingStart(true);
    }
  };

  const handleConfirm = () => {
    if (tempStart && tempEnd) {
      onSelect(format(tempStart, 'yyyy-MM-dd'), format(tempEnd, 'yyyy-MM-dd'));
      onClose();
    }
  };

  const getDayStatus = (day: Date) => {
    const isPast = isBefore(day, today);
    const isStart = tempStart && isSameDay(day, tempStart);
    const isEnd = tempEnd && isSameDay(day, tempEnd);
    const inRange =
      tempStart &&
      tempEnd &&
      isAfter(day, tempStart) &&
      isBefore(day, tempEnd);

    return { isPast, isStart, isEnd, inRange };
  };

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: Colors.overlay,
        }}
      >
        <View
          style={{
            backgroundColor: Colors.white,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            padding: 24,
            maxHeight: '85%',
          }}
        >
          {/* Header */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: '700', color: Colors.textPrimary }}>
              Sélectionner les dates
            </Text>
            <TouchableOpacity onPress={onClose} hitSlop={8}>
              <Ionicons name="close" size={24} color={Colors.textPrimary} />
            </TouchableOpacity>
          </View>

          {/* Selection hint */}
          <Text
            style={{
              fontSize: 14,
              color: Colors.textSecondary,
              marginBottom: 16,
              textAlign: 'center',
            }}
          >
            {selectingStart || !tempStart
              ? "Sélectionnez la date d'arrivée"
              : !tempEnd
              ? 'Sélectionnez la date de départ'
              : `${format(tempStart, 'd MMM', { locale: fr })} → ${format(tempEnd, 'd MMM yyyy', { locale: fr })}`}
          </Text>

          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Month navigation */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 16,
              }}
            >
              <TouchableOpacity
                onPress={() => setCurrentMonth(addMonths(currentMonth, -1))}
                hitSlop={8}
                disabled={isBefore(addMonths(currentMonth, -1), today)}
                style={{ opacity: isBefore(addMonths(currentMonth, -1), today) ? 0.3 : 1 }}
              >
                <Ionicons name="chevron-back" size={24} color={Colors.textPrimary} />
              </TouchableOpacity>
              <Text style={{ fontSize: 16, fontWeight: '700', color: Colors.textPrimary }}>
                {format(currentMonth, 'MMMM yyyy', { locale: fr })}
              </Text>
              <TouchableOpacity
                onPress={() => setCurrentMonth(addMonths(currentMonth, 1))}
                hitSlop={8}
              >
                <Ionicons name="chevron-forward" size={24} color={Colors.textPrimary} />
              </TouchableOpacity>
            </View>

            {/* Day names */}
            <View style={{ flexDirection: 'row', marginBottom: 8 }}>
              {DAY_NAMES.map((d) => (
                <View key={d} style={{ flex: 1, alignItems: 'center' }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '600',
                      color: Colors.textSecondary,
                    }}
                  >
                    {d}
                  </Text>
                </View>
              ))}
            </View>

            {/* Days grid */}
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {Array.from({ length: startWeekday }).map((_, i) => (
                <View key={`empty-${i}`} style={{ width: `${100 / 7}%` }} />
              ))}
              {days.map((day) => {
                const { isPast, isStart, isEnd, inRange } = getDayStatus(day);
                const isSelected = isStart || isEnd;

                return (
                  <TouchableOpacity
                    key={day.toISOString()}
                    onPress={() => handleDayPress(day)}
                    disabled={isPast}
                    style={{
                      width: `${100 / 7}%`,
                      aspectRatio: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: isSelected
                        ? Colors.accent
                        : inRange
                        ? Colors.accentLight
                        : 'transparent',
                      borderRadius: 8,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: isSelected ? '700' : '400',
                        color: isSelected
                          ? Colors.white
                          : isPast
                          ? Colors.border
                          : inRange
                          ? Colors.accent
                          : Colors.textPrimary,
                      }}
                    >
                      {format(day, 'd')}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>

          {/* Confirm button */}
          <TouchableOpacity
            onPress={handleConfirm}
            disabled={!tempStart || !tempEnd}
            style={{
              marginTop: 20,
              backgroundColor: tempStart && tempEnd ? Colors.accent : Colors.border,
              borderRadius: 14,
              paddingVertical: 16,
              alignItems: 'center',
            }}
            activeOpacity={0.8}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: tempStart && tempEnd ? Colors.white : Colors.textSecondary,
              }}
            >
              Confirmer les dates
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
