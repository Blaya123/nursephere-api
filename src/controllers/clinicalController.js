import User from '../models/User.js';

const historyStore = new Map();

export function dosageCalculate(req, res) {
  try {
    const { type, weight, dose, volume, time, bsa, desiredDose, concentration } = req.body;
    let result = {};
    let steps = [];

    switch (type) {
      case 'weight-based': {
        const totalDose = dose * weight;
        result = { totalDose, unit: 'mg' };
        steps = [`Dose per kg: ${dose} mg/kg`, `Patient weight: ${weight} kg`, `Total dose = ${dose} × ${weight} = ${totalDose} mg`];
        break;
      }
      case 'iv-drip': {
        const dripRate = (volume / time) * 20;
        result = { dripRate: Math.round(dripRate), unit: 'drops/min' };
        steps = [`Volume: ${volume} mL`, `Time: ${time} hours`, `Drip rate = (${volume} / ${time}) × 20 = ${Math.round(dripRate)} drops/min`];
        break;
      }
      case 'bsa': {
        const bsaCalc = Math.sqrt((weight * bsa) / 3600);
        result = { bsa: bsaCalc.toFixed(2), unit: 'm²' };
        steps = [`Weight: ${weight} kg`, `Height: ${bsa} cm`, `BSA = √((${weight} × ${bsa}) / 3600) = ${bsaCalc.toFixed(2)} m²`];
        break;
      }
      case 'desired-dose': {
        const ml = (desiredDose / concentration) * (volume || 1);
        result = { ml: Math.round(ml * 100) / 100, unit: 'mL' };
        steps = [`Desired dose: ${desiredDose} mg`, `Concentration: ${concentration} mg/mL`, `Volume = ${desiredDose} / ${concentration} = ${Math.round(ml * 100) / 100} mL`];
        break;
      }
      default:
        return res.status(400).json({ error: 'Invalid calculation type' });
    }

    const history = historyStore.get(req.userId) || [];
    history.unshift({ type, result, steps, timestamp: new Date() });
    if (history.length > 10) history.pop();
    historyStore.set(req.userId, history);

    res.json({ result, steps, history: history.slice(0, 10) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export function getHistory(req, res) {
  const history = historyStore.get(req.userId) || [];
  res.json(history.slice(0, 10));
}
